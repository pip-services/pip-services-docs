
```python
# Creating a factory

from pip_services3_components.build import Factory 

class MyClassFactory(Factory):
    def __init__(self):
        super(MyClassesFactory, self).__init__()

        ComponentADescriptor = Descriptor("myservice", "mycomponentA", "default", "*", "1.0")
        ComponentBDescriptor = Descriptor("myservice", "mycomponent-b", "default", "*", "1.0")

        self.register_as_type(ComponentADescriptor, MyComponentA)
        self.register_as_type(ComponentBDescriptor, MyComponentB)

```

