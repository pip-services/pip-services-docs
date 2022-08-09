
```python
from pip_services3_components.build import Factory
from pip_services3_commons.refer import Descriptor

factory1 = Factory()

factory1.register_as_type(Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1)
```
