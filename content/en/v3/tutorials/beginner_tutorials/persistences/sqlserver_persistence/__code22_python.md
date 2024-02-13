
```python
from pip_services3_commons.config import ConfigParams

persistence = MySqlServerPersistence()
persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 1433,
    "connection.database", "pip",
    "credential.username", "user",
    "credential.password", "password"
))
```
