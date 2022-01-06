
```python
lock = MemcachedLock()

from pip_services3_commons.config import ConfigParams

lock.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 11211
))
```
