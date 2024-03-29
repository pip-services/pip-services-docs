
```python
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build import DefaultRpcFactory


class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config.yaml'
        self._factories.add(HelloFriendControllerFactory())
        self._factories.add(DefaultRpcFactory())

```
