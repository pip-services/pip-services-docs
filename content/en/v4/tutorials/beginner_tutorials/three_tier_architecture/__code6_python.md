
```python
import bottle
from pip_services4_data.data import IStringIdentifiable
from pip_services4_data.validate import Schema
from pip_services4_http.controller import RestController


class HelloFriendRestController(RestController):

    def __init__(self):
        super(HelloFriendRestController, self).__init__()

        self._base_route = "/hello_friend"
        self._service: HelloFriendService = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestController, self).set_references(references)
        self._service = references.get_one_required(Descriptor('hello-friend', 'service', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        self.register_route(method="GET", route="/greeting_create", schema=Schema(), handler=self.create)

    def greeting(self):
        result = self._service.greeting()
        return self.send_result(result)

    def create(self):
        trace_id = self._get_trace_id()
        item = MyFriend(
            bottle.request.query["id"],
            bottle.request.query["type"],
            bottle.request.query["name"]
        )
        result = self._service.create(correlation_id, item)

        return self.send_result(result)


```
