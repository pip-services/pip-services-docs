
```python
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import References

client = MyGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
))

client.set_references(References())
```
