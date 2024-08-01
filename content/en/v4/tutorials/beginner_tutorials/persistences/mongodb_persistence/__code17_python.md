
```python
    def get_count_by_filter(self, context: Optional[IContext], filter: FilterParams) -> int:
        return super().get_count_by_filter(context, self._compose_filter(filter))
```
