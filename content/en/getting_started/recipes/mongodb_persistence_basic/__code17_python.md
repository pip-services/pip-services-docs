
```python
    def get_count_by_filter(self, correlation_id: Optional[str], filter: FilterParams) -> int:
        return super().get_count_by_filter(correlation_id, self._compose_filter(filter))
```
