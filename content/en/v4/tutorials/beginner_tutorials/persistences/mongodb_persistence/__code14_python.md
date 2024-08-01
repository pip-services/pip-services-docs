
```python
from pip_services4_data.query import PagingParams, DataPage
def get_page_by_filter(self, context: Optional[IContext], filter: FilterParams, paging: PagingParams,
                           sort: SortParams) -> DataPage:
        return super().get_page_by_filter(trace_id, self._compose_filter(filter), paging, self._compose_sort(sort), None)
```
