
```python
class IdentifiableMongoDbPersistence(MongoDbPersistence):

    def __init__(self, collection: str = None):
        ...

    def _convert_from_public_partial(self, value: Any) -> Any:
        ...

    def get_list_by_ids(self, correlation_id: Optional[str], ids: List[Any]) -> List[T]:
        ...

    def get_one_by_udi(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def create(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def set(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def update(self, correlation_id: Optional[str], item: T) -> Optional[T]:
        ...

    def update_partially(self, correlation_id: Optional[str], id: Any, data: AnyValueMap) -> T:
        ...

    def delete_by_id(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def delete_by_ids(self, correlation_id: Optional[str], ids: List[Any]):
        ...


```

