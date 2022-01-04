
```python
from pip_services3_commons.config import ConfigParams

lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 6379
))

```
