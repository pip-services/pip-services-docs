
```python
cache = MemcachedCache()

from pip_services3_commons.config import ConfigParams

cache.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 11211
))
```
