
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor, IUnreferenceable
from pip_services4_components.run import IOpenable, ICleanable

class MyComponentB():
    _param1 = 'ABC2'       
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

