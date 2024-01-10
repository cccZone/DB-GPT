import json
from typing import List

import requests
from cachetools import TTLCache, cached

from dbgpt.core.interface.message import ModelMessage, ModelMessageRoleType
from dbgpt.model.proxy.llms.proxy_model import ProxyModel


@cached(TTLCache(1, 1800))
def _build_access_token(api_key: str, secret_key: str) -> str:
    """
    Generate Access token according AK, SK
    """

    url = "https://aip.baidubce.com/oauth/2.0/token"
    params = {
        "grant_type": "client_credentials",
        "client_id": api_key,
        "client_secret": secret_key,
    }

    res = requests.get(url=url, params=params)

    if res.status_code == 200:
        return res.json().get("access_token")


def _to_wenxin_messages(messages: List[ModelMessage]):
    """Convert messages to wenxin compatible format

    See https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11
    """
    wenxin_messages = []
    system_messages = []
    for message in messages:
        if message.role == ModelMessageRoleType.HUMAN:
            wenxin_messages.append({"role": "user", "content": message.content})
        elif message.role == ModelMessageRoleType.SYSTEM:
            system_messages.append(message.content)
        elif message.role == ModelMessageRoleType.AI:
            wenxin_messages.append({"role": "assistant", "content": message.content})
        else:
            pass
    if len(system_messages) > 1:
        raise ValueError("Wenxin only support one system message")
    str_system_message = system_messages[0] if len(system_messages) > 0 else ""
    return wenxin_messages, str_system_message


def __convert_2_wenxin_messages(messages: List[ModelMessage]):
    wenxin_messages = []

    last_usr_message = ""
    system_messages = []

    for message in messages:
        if message.role == ModelMessageRoleType.HUMAN:
            last_usr_message = message.content
        elif message.role == ModelMessageRoleType.SYSTEM:
            system_messages.append(message.content)
        elif message.role == ModelMessageRoleType.AI:
            last_ai_message = message.content
            wenxin_messages.append({"role": "user", "content": last_usr_message})
            wenxin_messages.append({"role": "assistant", "content": last_ai_message})

    # build last user messge

    if len(system_messages) > 0:
        if len(system_messages) > 1:
            end_message = system_messages[-1]
        else:
            last_message = messages[-1]
            if last_message.role == ModelMessageRoleType.HUMAN:
                end_message = system_messages[-1] + "\n" + last_message.content
            else:
                end_message = system_messages[-1]
    else:
        last_message = messages[-1]
        end_message = last_message.content
    wenxin_messages.append({"role": "user", "content": end_message})
    str_system_message = system_messages[0] if len(system_messages) > 0 else ""
    return wenxin_messages, str_system_message


def wenxin_generate_stream(
    model: ProxyModel, tokenizer, params, device, context_len=2048
):
    MODEL_VERSION = {
        "ERNIE-Bot": "completions",
        "ERNIE-Bot-turbo": "eb-instant",
    }

    model_params = model.get_params()
    model_name = model_params.proxyllm_backend
    model_version = MODEL_VERSION.get(model_name)
    if not model_version:
        yield f"Unsupport model version {model_name}"

    proxy_api_key = model_params.proxy_api_key
    proxy_api_secret = model_params.proxy_api_secret
    access_token = _build_access_token(proxy_api_key, proxy_api_secret)

    headers = {"Content-Type": "application/json", "Accept": "application/json"}

    proxy_server_url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/{model_version}?access_token={access_token}"

    if not access_token:
        yield "Failed to get access token. please set the correct api_key and secret key."

    messages: List[ModelMessage] = params["messages"]

    convert_to_compatible_format = params.get("convert_to_compatible_format", False)
    if convert_to_compatible_format:
        history, system_message = __convert_2_wenxin_messages(messages)
    else:
        history, system_message = _to_wenxin_messages(messages)
    payload = {
        "messages": history,
        "system": system_message,
        "temperature": params.get("temperature"),
        "stream": True,
    }

    text = ""
    res = requests.post(proxy_server_url, headers=headers, json=payload, stream=True)
    print(f"Send request to {proxy_server_url} with real model {model_name}")
    for line in res.iter_lines():
        if line:
            if not line.startswith(b"data: "):
                error_message = line.decode("utf-8")
                yield error_message
            else:
                json_data = line.split(b": ", 1)[1]
                decoded_line = json_data.decode("utf-8")
                if decoded_line.lower() != "[DONE]".lower():
                    obj = json.loads(json_data)
                    if obj["result"] is not None:
                        content = obj["result"]
                        text += content
                yield text
