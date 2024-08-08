
```python
from pip_services4_components.context import ContextInfo
from pip_services4_components.refer import References, Descriptor

context_info = ContextInfo()
context_info.name = 'Test'
context_info.description = 'This is a test container'

references = References.from_tuples(
    Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
    Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller
)

controller.set_references(references)
counters.set_references(references)
```
