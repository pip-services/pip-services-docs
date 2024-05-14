
```python
from pip_services4_components.config import ConfigParams

persistence = MyMySqlPersistence()
persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 3306,
    "credential.username", "root",
    "credential.password", "password",
    "connection.database", "pip"
))

```
