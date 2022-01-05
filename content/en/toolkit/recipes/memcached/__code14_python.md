
```python
from pip_services3_memcached.lock import MemcachedLock
from pip_services3_commons.config import ConfigParams

lock.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 11211
))
        
lock.open("123")
lock.acquire_lock("123", "key1", 3000, 1000)
try:
    # Processing...
    pass
finally:
    lock.release_lock("123", "key1")
```
