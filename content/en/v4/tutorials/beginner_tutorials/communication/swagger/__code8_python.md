
```python
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory


class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

        HttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'http', '*', '1.0')                          # View 1
        CommandableHttpControllerDescriptor1 = Descriptor('hello-friend', 'controller', 'commandable-http1', '*', '1.0') # View 2
        CommandableHttpControllerDescriptor2 = Descriptor('hello-friend', 'controller', 'commandable-http2', '*', '1.0') # View 2
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')                     # Controller
                                                                                
            
        self.register_as_type(HttpControllerDescriptor, HelloFriendRestController)                       # Controller
        self.register_as_type(CommandableHttpControllerDescriptor1, FriendCommandableHttpController1)    # Controller
        self.register_as_type(CommandableHttpControllerDescriptor2, FriendCommandableHttpController2)    # Controller
        self.register_as_type(ServiceDescriptor, HelloFriendService)                         # Service
```
