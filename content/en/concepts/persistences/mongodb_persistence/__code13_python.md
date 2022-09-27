
```python
   def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        key = filter.get_as_nullable_string('key')

        filter_condition = {}

        if key is not None:
            filter_condition['key'] = key
    
        return filter_condition

    def _compose_sort(self, sort: SortParams):
        sort = sort or SortParams()
        compose_sort = ''

        for i, filed in enumerate(sort):
            compose_sort += filed.name + (' ASC' if filed.ascending else ' DESC')

        return compose_sort
```
