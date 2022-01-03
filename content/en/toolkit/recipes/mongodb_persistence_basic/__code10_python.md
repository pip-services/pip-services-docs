
```python
    def get_list_by_filter(self, correlation_id: Optional[str], filter: FilterParams, sort: SortParams) -> List[MyData]:
         return super().get_list_by_filter(correlation_id, filter, None, None)
```
