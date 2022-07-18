
```python
context_info = ContextInfo()
context_info.name = 'Test'
context_info.description = 'This is a test container'

references = References.from_tuples(
    Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
    Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    Descriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service
)

service.set_references(references)
counters.set_references(references)
```
