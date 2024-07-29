
```python
from pip_services4_components.config import ConfigParams

persistence1 = MyMySqlPersistence()
persistence1.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 3306,
    "credential.username", "root",
    "credential.password", "password",
    "connection.database", "pip1"
))

```
