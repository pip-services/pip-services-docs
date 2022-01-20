
```python
from pip_services3_commons.config import ConfigParams, References

client = MyGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 50055
))

client.set_references(References())
```
