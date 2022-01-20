
```python
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory


class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config2D4.yaml'
        self._factories.add(HelloFriendServiceFactory())
        self._factories.add(DefaultRpcFactory())

```
