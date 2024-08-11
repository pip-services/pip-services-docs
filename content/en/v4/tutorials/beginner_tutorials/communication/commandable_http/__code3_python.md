
```python
from pip_services4_http.controller import CommandableHttpController

class FriendCommandableHttpController(CommandableHttpController):

    def __init__(self):
        super().__init__('commandable_hello_friend')
        self._dependency_resolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'))
```
