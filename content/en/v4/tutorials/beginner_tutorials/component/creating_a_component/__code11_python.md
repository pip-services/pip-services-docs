
```python
# Creating a factory

from pip_services4_components.build import Factory 

class MyClassFactory(Factory):
    def __init__(self):
        super(MyClassFactory, self).__init__()

        ComponentADescriptor = Descriptor("myservice", "mycomponentA", "default", "*", "1.0")
        ComponentBDescriptor = Descriptor("myservice", "mycomponent-b", "default", "*", "1.0")

        self.register_as_type(ComponentADescriptor, MyComponentA)
        self.register_as_type(ComponentBDescriptor, MyComponentB)

```

