
```python
# Pre-requisites
from pip_services3_commons.refer import References

# Reference setting
client.set_references(References.from_tuples(
    Descriptor("pip-services", "controller", "controller", "default", "1.0"), myController))
```
