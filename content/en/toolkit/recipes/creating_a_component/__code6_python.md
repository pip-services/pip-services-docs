
```python
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.refer import IReferenceable, IReferences, Descriptor
from pip_services3_commons.run import IOpenable

class MyComponentB():
       
    # ...
    
class MyComponentA(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _open = False
    _status = None
    
    # ...
    
    def close(self, correlation_id):
        self._opened = False
        self._status = "Closed"
        print("MyComponentA has been closed.")
        

```

