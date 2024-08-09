
```python
from pip_services4_http.controller import CommandableHttpController

class FriendCommandableHttpController2(CommandableHttpController):

    def __init__(self):
        super().__init__('commandable_hello_friend2')
        self._dependency_resolver.put('service', Descriptor('hello-friend', 'service', '*', '*', '*'))

        self._swagger_path = None
        
    def configure(self, config):
        super().configure(config)

        # Swagger
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def register(self):
        super().register()

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)
```
