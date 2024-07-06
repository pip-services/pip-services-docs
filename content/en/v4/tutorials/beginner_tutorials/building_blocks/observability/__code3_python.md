
```python
from pip_services4_components.refer import IReferenceable, IReferences
from pip_services4_observability.trace import CompositeTracer


class MyComponent(IReferenceable):
    _tracer: CompositeTracer = CompositeTracer()

    def set_references(self, refs: IReferences):
        self._tracer.set_references(refs)

    def do_something(self, context: IContext):
        timing = self._tracer.begin_trace(context, "mycomponent", "do_something")
        try:
            ...
            timing.end_trace()
        except Exception as ex:
            timing.end_failure(ex)


```
