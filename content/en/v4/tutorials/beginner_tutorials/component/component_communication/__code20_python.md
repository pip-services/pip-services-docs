
```python
references = References.from_tuples(
    Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
    Descriptor("pip-services", "metrics-controller", "prometheus", "default", "2.0"), controller2,
    Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    Descriptor("pip-services", "context-info", "default", "*", "1.0"),  ContextInfo('tutorial', 'Example context conmponent'),
    Descriptor("pip-services", "logger", "console","default", "1.0"),  ConsoleLogger()
)
```
