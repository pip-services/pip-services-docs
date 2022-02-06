
```python
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory
from pip_services3_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory



class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './configV6.yml'
        self._factories.add(HelloFriendServiceFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())
```
