
```python
class IMyDataPersistence(ABC):
    
    # CRUD operations
    
    # Create
    def set(self, correlation_id: Optional[str], item: MyData) -> MyData:
        raise NotImplemented()
        
    def create(self, correlation_id: Optional[str], item: MyData) -> MyData:
        raise NotImplemented()
    
    # Retrive
    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams,
                           paging: Optional[PagingParams], sort: Optional[SortParams]) -> DataPage:
        raise NotImplemented()

    def get_count_by_filter(self, correlation_id: Optional[str], filter: FilterParams) -> int:
        raise NotImplemented()

    def get_list_by_filter(self, correlation_id: Optional[str], filter: FilterParams) -> List[MyData]:
        raise NotImplemented()

    def get_list_by_ids(self, correlation_id: Optional[str], ids: List[str]) -> List[MyData]:
        raise NotImplemented()

    def get_one_by_id(self, correlation_id: Optional[str], id: str) -> MyData:
        raise NotImplemented()

    # Update
    def update(self, correlation_id: Optional[str], item: MyData) -> MyData:
        raise NotImplemented()

    def update_partially(self, correlation_id: Optional[str], id: str, data: AnyValueMap) -> MyData:
        raise NotImplemented()
    
    # Delete
    def delete_by_id(self, correlation_id: Optional[str], id: str) -> MyData:
        raise NotImplemented()

    def delete_by_ids(self, correlation_id: Optional[str], ids: List[str]):
        raise NotImplemented()

    def delete_by_filter(self, correlation_id: Optional[str], filter: FilterParams):
        raise NotImplemented()
```
