
```python
from pip_services3_commons.config import ConfigParams, References

service = MyGrpcService()
service.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 50055
))

service.set_references(References());

```
