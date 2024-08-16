
```python
class IdentifiableMongoDbPersistence(MongoDbPersistence):

    def __init__(self, collection: str = None):
        ...

    def _convert_from_public_partial(self, value: Any) -> Any:
        ...

    def get_list_by_ids(self, context: Optional[IContext], ids: List[Any]) -> List[T]:
        ...

    def get_one_by_udi(self, context: Optional[IContext], id: Any) -> T:
        ...

    def create(self, context: Optional[IContext], item: T) -> T:
        ...

    def set(self, context: Optional[IContext], item: T) -> T:
        ...

    def update(self, context: Optional[IContext], item: T) -> Optional[T]:
        ...

    def update_partially(self, context: Optional[IContext], id: Any, data: AnyValueMap) -> T:
        ...

    def delete_by_id(self, context: Optional[IContext], id: Any) -> T:
        ...

    def delete_by_ids(self, context: Optional[IContext], ids: List[Any]):
        ...


```
