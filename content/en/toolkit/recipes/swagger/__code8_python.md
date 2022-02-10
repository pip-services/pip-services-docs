
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

        HttpServiceDescriptor = Descriptor('hello-friend', 'service', 'http', '*', '1.0')                          # View 1
        CommandableHttpServiceDescriptor1 = Descriptor('hello-friend', 'service', 'commandable-http1', '*', '1.0') # View 2
        CommandableHttpServiceDescriptor2 = Descriptor('hello-friend', 'service', 'commandable-http2', '*', '1.0') # View 2
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')                     # Controller
                                                                                
            
        self.register_as_type(HttpServiceDescriptor, HelloFriendRestService)                       # View 1
        self.register_as_type(CommandableHttpServiceDescriptor1, FriendCommandableHttpService1)    # View 2
        self.register_as_type(CommandableHttpServiceDescriptor2, FriendCommandableHttpService2)    # View 3
        self.register_as_type(ControllerDescriptor, HelloFriendController)                         # Controller
        
```
