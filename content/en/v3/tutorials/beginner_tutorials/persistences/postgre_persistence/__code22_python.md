
```python
from pip_services3_commons.config import ConfigParams

persistence = MyPostgresPersistence()

persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 5432,
    "connection.database", "pip1",
    "credential.user", "postgres", 
    "credential.password", "admin"
))
```
