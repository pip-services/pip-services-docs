
```python
import bottle
from pip_services3_commons.data import IStringIdentifiable
from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService


class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"

        ControllerDescriptor = Descriptor('hello-friend', 'controller', '*', '*', '1.0')
     #   self._dependency_resolver.put('controller', ControllerDescriptor)
        self._controller = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        #self._controller = self._dependency_resolver.get_one_required('controller')
        self._controller = references.get_one_required(Descriptor('hello-friend', 'controller', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)

    def greeting(self):
       # name = bottle.request.query.get('name')
        result = self._controller.greeting()
        return self.send_result(result)

```
