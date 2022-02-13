
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

 
        CommandableHttpServiceDescriptor = Descriptor('hello-friend', 'service', 'commandable-http', '*', '1.0') # View 
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')                   # Controller
                                                                                
            

        self.register_as_type(CommandableHttpServiceDescriptor, FriendCommandableHttpService)    # View 
        self.register_as_type(ControllerDescriptor, HelloFriendController)                       # Controller
```
