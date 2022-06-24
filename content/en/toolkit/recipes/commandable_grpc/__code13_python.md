
```python
from typing import Optional

from pip_services3_commons.data.DataPage import DataPage
from pip_services3_commons.data.FilterParams import FilterParams
from pip_services3_commons.data.PagingParams import PagingParams

from pip_services3_grpc.clients.CommandableGrpcClient import CommandableGrpcClient

from data.MyData import MyData
from .IMyDataClient import IMyDataClient


class MyCommandableGrpcClient(CommandableGrpcClient, IMyDataClient):

    def __init__(self):
        super().__init__('mydata')

    def get_my_datas(self, correlation_id: Optional[str], filter: Optional[FilterParams], paging: Optional[PagingParams]) -> DataPage:
        return self.call_command('get_my_datas', correlation_id, {'filter': filter, 'paging': paging})

    def get_my_data_by_id(self, correlation_id: Optional[str], my_data_id) -> MyData:
        return self.call_command('get_my_data_by_id', correlation_id, {'my_data_id': my_data_id})

    def create_my_data(self, correlation_id: Optional[str], my_data) -> MyData:
        return self.call_command('create_my_data', correlation_id, {'my_data': my_data})

    def update_my_data(self, correlation_id: Optional[str], my_data) -> MyData:
        return self.call_command('update_my_data', correlation_id, {'my_data': my_data})

    def delete_my_data(self, correlation_id: Optional[str], my_data_id: str) -> MyData:
        return self.call_command('delete_my_data', correlation_id, {'my_data_id': my_data_id})


```
