
```python
from pip_services4_components.config import ConfigParams

options = ConfigParams.from_tuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", None
)

uri = ConnectionUtils.compose_uri(options, "tcp", 9092)
```
