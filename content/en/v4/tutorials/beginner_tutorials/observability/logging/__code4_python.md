
```python
# Creating a factory

from pip_services4_components.build import Factory 
MyFactory1 = Factory()

MyFactory1.register_as_type(Descriptor("myservice", "mycomponentA", "default", "*", "1.0"), MyComponentA)
MyFactory1.register_as_type(Descriptor("myservice", "mycomponent-b", "default", "*", "1.0"), MyComponentB)
```
