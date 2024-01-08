from typing import List, Optional

from dbgpt.component import BaseComponent, SystemApp
from dbgpt.serve.core import BaseService
from dbgpt.storage.metadata import BaseDao
from dbgpt.util.pagination_utils import PaginationResult

from ..api.schemas import ServeRequest, ServerResponse
from ..config import SERVE_CONFIG_KEY_PREFIX, SERVE_SERVICE_COMPONENT_NAME, ServeConfig
from ..models.models import ServeDao, ServeEntity


class Service(BaseService[ServeEntity, ServeRequest, ServerResponse]):
    """The service class for {__template_app_name__hump__}"""

    name = SERVE_SERVICE_COMPONENT_NAME

    def __init__(self, system_app: SystemApp, dao: Optional[ServeDao] = None):
        self._system_app = None
        self._serve_config: ServeConfig = None
        self._dao: ServeDao = dao
        super().__init__(system_app)

    def init_app(self, system_app: SystemApp) -> None:
        """Initialize the service

        Args:
            system_app (SystemApp): The system app
        """
        self._serve_config = ServeConfig.from_app_config(
            system_app.config, SERVE_CONFIG_KEY_PREFIX
        )
        self._dao = self._dao or ServeDao(self._serve_config)
        self._system_app = system_app

    @property
    def dao(self) -> BaseDao[ServeEntity, ServeRequest, ServerResponse]:
        """Returns the internal DAO."""
        return self._dao

    @property
    def config(self) -> ServeConfig:
        """Returns the internal ServeConfig."""
        return self._serve_config

    def update(self, request: ServeRequest) -> ServerResponse:
        """Update a {__template_app_name__hump__} entity

        Args:
            request (ServeRequest): The request

        Returns:
            ServerResponse: The response
        """
        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = {
            # "id": request.id
        }
        return self.dao.update(query_request, update_request=request)

    def get(self, request: ServeRequest) -> Optional[ServerResponse]:
        """Get a {__template_app_name__hump__} entity

        Args:
            request (ServeRequest): The request

        Returns:
            ServerResponse: The response
        """
        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = request
        return self.dao.get_one(query_request)

    def delete(self, request: ServeRequest) -> None:
        """Delete a {__template_app_name__hump__} entity

        Args:
            request (ServeRequest): The request
        """

        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = {
            # "id": request.id
        }
        self.dao.delete(query_request)

    def get_list(self, request: ServeRequest) -> List[ServerResponse]:
        """Get a list of {__template_app_name__hump__} entities

        Args:
            request (ServeRequest): The request

        Returns:
            List[ServerResponse]: The response
        """
        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = request
        return self.dao.get_list(query_request)

    def get_list_by_page(
        self, request: ServeRequest, page: int, page_size: int
    ) -> PaginationResult[ServerResponse]:
        """Get a list of {__template_app_name__hump__} entities by page

        Args:
            request (ServeRequest): The request
            page (int): The page number
            page_size (int): The page size

        Returns:
            List[ServerResponse]: The response
        """
        query_request = request
        return self.dao.get_list_page(query_request, page, page_size)
