
```python
# Pre-requisites
from pip_services4_components.refer import References

# Reference setting
client.set_references(References.from_tuples(
    Descriptor("pip-services", "service", "service", "default", "1.0"), myService))

```
