
```python
from pip_services4_components.refer import IReferenceable, IReferences
from pip_services4_observability.count import CompositeCounters
from pip_services4_messaging.queues import MessageEnvelope


class MyComponent(IReferenceable):
    _counters: CompositeCounters = CompositeCounters()

    def set_references(self, refs: IReferences):
        self._counters.set_references(refs)

    def on_message(self, message: MessageEnvelope):
        timing = self._counters.begin_timing("mycomponent:msg_time")
        try:
            self._counters.increment("mycomponent:msg_count", 1)
            ...
        except Exception as ex:
            self._counters.increment("mycomponent:msg_errors", 1)
        finally:
            timing.end_timing()
```
