
```python
from pip_services3_commons.config import ConfigParams

my_rest_service = MyRestService()

my_rest_service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15239))

my_rest_service.open("123")

```
