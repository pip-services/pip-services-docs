
```python
from pip_services3_commons.refer import IReferenceable, IReferences
from pip_services3_components.log import CompositeLogger


class MyComponent(IReferenceable):
    _logger: CompositeLogger = CompositeLogger()

    def set_references(self, refs: IReferences):
        self._logger.set_references(refs)

    def do_something(self, correlation_id: str):
        self._logger.debug(correlation_id, "Did something...")
        ...


```
