
See: [Commons module's](../../../toolkit_api/python/commons)

```python
from pip_services4_data.query import FilterParams, PagingParams, DataPage

class DataController(IConfigurable):
   __max_page_size: int = 5
   def configure(self, config: ConfigParams):
       self.__max_page_size = config.get_as_integer_with_default('max_page_size', self.__max_page_size)
   
   def get_data(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> DataPage: 
       paging.take = min(paging.take, self.__max_page_size)   # Get data using max page size constraint.
```
