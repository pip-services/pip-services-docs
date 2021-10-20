
```python

from pip_services3_components.build import Factory 
from pip_services3_commons.refer import Descriptor

MyFactory1 = Factory()

class classA:   
    
    def __init__(self):
        print("classA created")

my_classA = classA()

classA_descriptor = Descriptor("mygroup", "class", "classA", "classA", "1.0")

MyFactory1.register_as_type(classA_descriptor, classA)

```
