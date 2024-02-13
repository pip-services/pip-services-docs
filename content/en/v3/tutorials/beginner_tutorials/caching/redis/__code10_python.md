
```python
from pip_services3_commons.config import ConfigParams

lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 6379
))

```
