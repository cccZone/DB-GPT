from __future__ import annotations

import json
from collections import defaultdict
from typing import Dict, List, Optional

from dbgpt.util.json_utils import EnhancedJSONEncoder

from .base import GptsMessage, GptsMessageMemory, GptsPlansMemory
from .default_gpts_memory import DefaultGptsMessageMemory, DefaultGptsPlansMemory
from dbgpt.vis.client import vis_client, VisAgentMessages, VisAgentPlans


class GptsMemory:
    def __init__(
        self,
        plans_memory: Optional[GptsPlansMemory] = None,
        message_memory: Optional[GptsMessageMemory] = None,
    ):
        self._plans_memory: GptsPlansMemory = (
            plans_memory if plans_memory is not None else DefaultGptsPlansMemory()
        )
        self._message_memory: GptsMessageMemory = (
            message_memory if message_memory is not None else DefaultGptsMessageMemory()
        )

    @property
    def plans_memory(self):
        return self._plans_memory

    @property
    def message_memory(self):
        return self._message_memory

    async def one_chat_competions(self, conv_id: str):
        messages = self.message_memory.get_by_conv_id(conv_id=conv_id)

        messages_group = defaultdict(list)
        for item in messages:
            messages_group[item.current_gogal].append(item)

        plans_info_map = defaultdict()
        if messages_group:
            num: int = 0
            for key, value in messages_group.items():
                num = num + 1
                plans_info_map[key] = {
                    "name": key,
                    "num": num,
                    "status": "complete",
                    "agent": value[0].receiver if value else "",
                    "markdown": await self._messages_to_agents_vis(value),
                }

        return f"{await self._messages_to_plan_vis(list(plans_info_map.values()))}"

    async def _messages_to_agents_vis(self, messages: List[GptsMessage]):
        if messages is None or len(messages) <= 0:
            return ""
        messages_view = []
        for message in messages:
            action_report_str = message.action_report
            view_info = message.content
            if action_report_str and len(action_report_str) > 0:
                action_report = json.loads(action_report_str)
                if action_report:
                    view = action_report.get("view", None)
                    view_info = view if view else action_report.get("content", "")

            messages_view.append(
                {
                    "sender": message.sender,
                    "receiver": message.receiver,
                    "model": message.model_name,
                    "markdown": view_info,
                }
            )
        return await vis_client.get(VisAgentMessages.vis_tag()).disply(
            content=messages_view
        )

    async def _messages_to_plan_vis(self, messages: List[Dict]):
        if messages is None or len(messages) <= 0:
            return ""
        return await vis_client.get(VisAgentPlans.vis_tag()).disply(content=messages)
