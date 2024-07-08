
```python
from pip_services4_redis.lock import RedisLock
from pip_services4_components.config import ConfigParams
from pip_services4_components.context import Context

lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 6379
))

context_data = {
  "traceId": "123",
}

my_context = Context(context_data)

lock.open(my_context)
lock.acquire_lock(my_context, "key1", 3000, 1000)

try:
    # Processing...
    pass
finally:
    lock.release_lock(my_context, "key1")
```
