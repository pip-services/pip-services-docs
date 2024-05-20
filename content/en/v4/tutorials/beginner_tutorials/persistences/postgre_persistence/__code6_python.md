
```python
from pip_services4_components.config import ConfigParams

persistence = MyPostgresPersistence()
persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 5431,
    "connection.database", "pip1",
    "credential.username", "postgres", 
    "credential.password", "admin"
))
```
