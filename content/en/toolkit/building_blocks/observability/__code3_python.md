
```python
from pip_services3_commons.refer import IReferenceable, IReferences
from pip_services3_components.trace import CompositeTracer


class MyComponent(IReferenceable):
    _tracer: CompositeTracer = CompositeTracer()

    def set_references(self, refs: IReferences):
        self._tracer.set_references(refs)

    def do_something(self, correlation_id: str):
        timing = self._tracer.begin_trace(correlation_id, "mycomponent", "do_something")
        try:
            ...
            timing.end_trace()
        except Exception as ex:
            timing.end_failure(ex)


```
