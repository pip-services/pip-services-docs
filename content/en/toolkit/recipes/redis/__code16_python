
```python
from pip_services3_redis.lock import RedisLock
from pip_services3_commons.config import ConfigParams

lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 6379
))

lock.open("123")

lock.acquire_lock("123", "key1", 3000, 1000)

try:
    # Processing...
    pass
finally:
    lock.release_lock("123", "key1")
```
