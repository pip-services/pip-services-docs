
```python
class MyMongoDbPersistence(MongoDbPersistence):
    
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata2")
   
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


    def get_one_random(self, correlation_id: Optional[str], filter: FilterParams) -> MyData:
        return super().get_one_random(correlation_id, self._compose_filter(filter))

    def get_list_by_filter(self, correlation_id: Optional[str], filter: FilterParams, sort: SortParams) -> List[MyData]:
         return super().get_list_by_filter(correlation_id, self._compose_filter(filter), None, self._compose_sort(sort))
         
    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: SortParams) -> DataPage:
        return super().get_page_by_filter(correlation_id, self._compose_filter(filter), paging, self._compose_sort(sort), None)

    def get_count_by_filter(self, correlation_id: Optional[str], filter: FilterParams) -> int:
        return super().get_count_by_filter(correlation_id, self._compose_filter(filter))

    def delete_by_filter(self, correlation_id: Optional[str], filter: FilterParams):
        super().delete_by_filter(correlation_id, self._compose_filter(filter))
```
