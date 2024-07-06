
```python
from pip_services4_components.refer import IReferenceable, IReferences
from pip_services4_observability.log import CompositeLogger


class MyComponent(IReferenceable):
    _logger: CompositeLogger = CompositeLogger()

    def set_references(self, refs: IReferences):
        self._logger.set_references(refs)

    def do_something(self, context: IContext):
        self._logger.debug(context, "Did something...")

```
