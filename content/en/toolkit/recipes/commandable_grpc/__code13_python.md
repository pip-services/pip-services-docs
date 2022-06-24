
```python
from abc import ABC
from typing import Optional

from pip_services3_commons.data import FilterParams, PagingParams, DataPage

from data.MyData import MyData


class IMyDataClient(ABC):

    def get_my_datas(self, correlation_id: Optional[str], filter: Optional[FilterParams], paging: Optional[PagingParams]) -> DataPage:
        pass

    def get_my_data_by_id(self, correlation_id: Optional[str], my_data_id: str) -> MyData:
        pass

    def create_my_data(self, correlation_id: Optional[str], my_data: MyData) -> MyData:
        pass

    def update_my_data(self, correlation_id: Optional[str], my_data: MyData) -> MyData:
        pass

    def delete_my_data(self, correlation_id: Optional[str], my_data_id: str) -> MyData:
        pass

```
