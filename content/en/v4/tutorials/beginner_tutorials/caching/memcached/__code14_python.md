
```python
from pip_services4_memcached.lock import MemcachedLock
from pip_services4_components.config import ConfigParams
from pip_services4_components.context import Context

lock = MemcachedLock()

lock.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 11211
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

lock.close(my_context)
```
