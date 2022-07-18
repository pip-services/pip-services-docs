
```python
from bottle import request
from pip_services3_rpc.services import RestService


class MyRestService(RestService):

    def __init__(self):
        super(MyRestService, self).__init__()
        self._base_route = "/my_service"

    def my_page(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)

    def register(self):
        self.register_route(method="GET", route="/my_page/<name>", schema=None, handler=self.my_page)


from pip_services3_commons.config import ConfigParams

my_rest_service = MyRestService()

my_rest_service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15239))

my_rest_service.open("123")

```
