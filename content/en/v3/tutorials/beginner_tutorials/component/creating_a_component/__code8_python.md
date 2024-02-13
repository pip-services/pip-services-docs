
```python
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.refer import IReferenceable, IReferences, Descriptor, IUnreferenceable
from pip_services3_commons.run import IOpenable, ICleanable

class MyComponentB():
       
    # ...
    
class MyComponentA(IReferenceable, IUnreferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _open = False
    _status = None
    
    # ...
    
    def __del__(self):
        print("Component destroyed")
        
```

