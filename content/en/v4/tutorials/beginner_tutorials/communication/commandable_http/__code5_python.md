
```python
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory

class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

 
        CommandableHttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'commandable-http', '*', '1.0') # Controller 
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')                   # Service
                                                                                
            

        self.register_as_type(CommandableHttpControllerDescriptor, FriendCommandableHttpController)    # Controller
        self.register_as_type(ServiceDescriptor, HelloFriendService)                       # Service
```
