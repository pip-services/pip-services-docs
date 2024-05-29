
```python
class HelloWorldServiceFactory(Factory):
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```python
def __init__(self):
    super(HelloWorldServiceFactory, self).__init__()
    ControllerDescriptor = Descriptor('hello-world', 'controller', 'default', '*', '1.0')
    HttpServiceDescriptor = Descriptor('hello-world', 'service', 'http', '*', '1.0')
    self.register_as_type(ControllerDescriptor, HelloWorldController)
    self.register_as_type(HttpServiceDescriptor, HelloWorldRestService)

```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

A full listing of the factory's code can be found in the file:

**‍/HelloWorldServiceFactory.py**

```python
# -*- coding: utf-8 -*- 
from HelloWorldController import HelloWorldController
from HelloWorldRestService import HelloWorldRestService
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class HelloWorldServiceFactory(Factory):
    def __init__(self):

        super(HelloWorldServiceFactory, self).__init__()
        ControllerDescriptor = Descriptor('hello-world', 'controller', 'default', '*', '1.0')
        HttpServiceDescriptor = Descriptor('hello-world', 'service', 'http', '*', '1.0')
        self.register_as_type(ControllerDescriptor, HelloWorldController)
        self.register_as_type(HttpServiceDescriptor, HelloWorldRestService)

```
