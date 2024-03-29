
```python
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory


class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

        HttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'http', '*', '1.0')  # View
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')  # Service
        PersistenceDescriptor = Descriptor('hello-friend', 'persistence', 'mysql', '*', '1.0')  # Persistence

        self.register_as_type(HttpControllerDescriptor, HelloFriendRestController)  # View
        self.register_as_type(ServiceDescriptor, HelloFriendService)  # Controller
        self.register_as_type(PersistenceDescriptor, HelloFriendPersistence)  # Persistence

```
