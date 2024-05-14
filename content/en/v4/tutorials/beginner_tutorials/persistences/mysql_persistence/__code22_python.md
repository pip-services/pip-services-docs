
```python
from pip_services3_commons.config import ConfigParams

persistence = MyMySqlPersistence()
persistence.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 3306,
    "credential.username", "root",
    "credential.password", "password",
    "connection.database", "pip"
))
```
