
```python
    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: SortParams) -> DataPage:
        return super().get_page_by_filter(correlation_id, self._compose_filter(filter), paging, self._compose_sort(sort), None)
```
