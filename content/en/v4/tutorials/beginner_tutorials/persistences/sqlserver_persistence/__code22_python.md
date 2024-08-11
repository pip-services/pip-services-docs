
```python
from pip_services4_components.config import ConfigParams

persistence = MySqlServerPersistence()
persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 1433,
    "connection.database", "pip",
    "credential.username", "user",
    "credential.password", "password"
))
```
