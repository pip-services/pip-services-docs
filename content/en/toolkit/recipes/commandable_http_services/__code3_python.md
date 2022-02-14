
```python
from pip_services3_rpc.services import CommandableHttpService

class FriendCommandableHttpService(CommandableHttpService):

    def __init__(self):
        super().__init__('commandable_hello_friend')
        self._dependency_resolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'))
```
