
```python
class HelloWorldControllerFactory(Factory):
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```python
def __init__(self):
    super(HelloWorldControllerFactory, self).__init__()
    ServiceDescriptor = Descriptor('hello-world', 'service', 'default', '*', '1.0')
    HttpControllerDescriptor = Descriptor('hello-world', 'controller', 'http', '*', '1.0')
    self.register_as_type(ServiceDescriptor, HelloWorldService)
    self.register_as_type(HttpControllerDescriptor, HelloWorldRestController)

```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

A full listing of the factory's code can be found in the file:

**‍/HelloWorldServiceFactory.py**

```python
# -*- coding: utf-8 -*- 
from HelloWorldService import HelloWorldService
from HelloWorldRestController import HelloWorldRestController
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory


class HelloWorldControllerFactory(Factory):
    def __init__(self):

        super(HelloWorldControllerFactory, self).__init__()
        ServiceDescriptor = Descriptor('hello-world', 'service', 'default', '*', '1.0')
        HttpControllerDescriptor = Descriptor('hello-world', 'controller', 'http', '*', '1.0')
        self.register_as_type(ServiceDescriptor, HelloWorldService)
        self.register_as_type(HttpControllerDescriptor, HelloWorldRestController)

```
