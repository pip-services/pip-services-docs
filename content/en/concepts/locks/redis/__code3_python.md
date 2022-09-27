
```python
from pip_services3_commons.config import ConfigParams

cache = RedisCache()
cache.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 6379
))
```
