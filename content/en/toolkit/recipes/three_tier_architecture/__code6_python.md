
```python
import bottle
from pip_services3_commons.data import IStringIdentifiable
from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService


class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"
        self._controller: HelloFriendController = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        self._controller = references.get_one_required(Descriptor('hello-friend', 'controller', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        self.register_route(method="GET", route="/greeting_create", schema=Schema(), handler=self.create)

    def greeting(self):
        result = self._controller.greeting()
        return self.send_result(result)

    def create(self):
        correlation_id = self._get_correlation_id()
        item = MyFriend(
            bottle.request.query["id"],
            bottle.request.query["type"],
            bottle.request.query["name"]
        )
        result = self._controller.create(correlation_id, item)

        return self.send_result(result)

```
