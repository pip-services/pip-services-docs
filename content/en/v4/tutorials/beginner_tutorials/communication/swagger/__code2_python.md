
```python
from pip_services4_components.refer import Descriptor
from pip_services4_data.validate import Schema
from pip_services4_http.controller import RestController

import bottle


class HelloFriendRestController(RestController):

    def __init__(self):
        super(HelloFriendRestController, self).__init__()

        self._base_route = "/hello_friend"

        ServiceDescriptor = Descriptor('hello-friend', 'service', '*', '*', '1.0')
        self._dependency_resolver.put('service', ServiceDescriptor)
        self._service = None

        # Swagger
        self._swagger_content = None
        self._swagger_path = None

    def configure(self, config):
        super().configure(config)
        
        # Swagger
        self._swagger_content = config.get_as_nullable_string("swagger.content")
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def set_references(self, references):
        super(HelloFriendRestController, self).set_references(references)
        self._service = self._dependency_resolver.get_one_required('service')

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
