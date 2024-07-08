
```python
from pip_services4_components.config import ConfigParams
from pip_services4_components.context import Context

cache = RedisCache()
cache.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 6379
))

context_data = {
  "traceId": "123",
}

my_context = Context(context_data)
```
