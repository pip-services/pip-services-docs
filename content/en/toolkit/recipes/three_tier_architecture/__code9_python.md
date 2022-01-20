
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

        HttpServiceDescriptor = Descriptor('hello-friend', 'service', 'http', '*', '1.0')  # View
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')  # Controller
        PersistenceDescriptor = Descriptor('hello-friend', 'persistence', 'mysql', '*',
                                           '1.0')  # Persistence                                                                           # Persistence

        self.register_as_type(HttpServiceDescriptor, HelloFriendRestService)  # View
        self.register_as_type(ControllerDescriptor, HelloFriendController)  # Controller
        self.register_as_type(PersistenceDescriptor, HelloFriendPersistence)  # Persistence

```
