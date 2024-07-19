
See: [DependencyResolver](../../../toolkit_api/python/components/refer/dependency_resolver/)

```python
class DependencyResolver(IReconfigurable, IReferenceable):

    def __init__(self, config: ConfigParams = None, references: IReferences = None):
        ...

    def configure(self, config: ConfigParams):
        ...

    def set_references(self, references: IReferences):
        ...

    def put(self, name: str, locator: Any):
        ...

    def __locate(self, name: str) -> Any:
        ...

    def get_optional(self, name: str) -> List[Any]:
        ...

    def get_required(self, name: str) -> List[Any]:
        ...

    def get_one_optional(self, name: str) -> Any:
        ...

    def get_one_required(self, name: str) -> Any:
        ...

    def find(self, name: str, required: bool) -> Optional[List[Any]]:
        ...

    @staticmethod
    def from_tuples(*tuples: Any) -> 'DependencyResolver':
        ...



```


