
```python
lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 6379
))
```
