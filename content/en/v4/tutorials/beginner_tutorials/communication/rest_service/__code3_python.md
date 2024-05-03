
```python
from pip_services4_components.config import ConfigParams

my_rest_controller = MyRestController()

my_rest_controller.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15239))

my_rest_controller.open("123")

```
