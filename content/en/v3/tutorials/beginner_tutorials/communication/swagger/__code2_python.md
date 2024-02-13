
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService

import bottle


class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"

        ControllerDescriptor = Descriptor('hello-friend', 'controller', '*', '*', '1.0')
        self._dependency_resolver.put('controller', ControllerDescriptor)
        self._controller = None

        # Swagger
        self._swagger_content = None
        self._swagger_path = None

    def configure(self, config):
        super().configure(config)
        
        # Swagger
        self._swagger_content = config.get_as_nullable_string("swagger.content")
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        
        # Swagger
        if self._swagger_content:
            self._register_open_api_spec(self._swagger_content)

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)

    def greeting(self):
        name = bottle.request.query.get('name')
        result = self._controller.greeting(name)
        return self.send_result(result)
```
