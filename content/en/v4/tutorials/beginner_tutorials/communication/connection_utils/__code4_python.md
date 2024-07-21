
```python
config = ConfigParams.from_tuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", None
)

config2 = ConnectionUtils.exclude(config, 'username', 'password')
```
