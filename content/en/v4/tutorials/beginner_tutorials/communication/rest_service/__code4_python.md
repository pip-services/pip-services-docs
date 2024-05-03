
```python
from bottle import request
from pip_services4_components.config import ConfigParams
from pip_services4_http.controller import RestController

class MyRestController(RestController):

    def __init__(self):
        super(MyRestController, self).__init__()
        self._base_route = "/my_controller"

    def my_page(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)

    def register(self):
        self.register_route(method="GET", route="/my_page/<name>", schema=None, handler=self.my_page)


my_rest_controller = MyRestController()

my_rest_controller.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15239))

my_rest_controller.open("123")

```
