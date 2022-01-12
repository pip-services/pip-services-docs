
```python
from pip_services3_commons.config import ConfigParams

service = MyGrpcService()
service.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 50055
))

```
