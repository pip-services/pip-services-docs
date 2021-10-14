
```python
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.refer import IReferenceable, IReferences, Descriptor


class MyComponentB():
       
    # ...
       

class MyComponentA(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _open = False
    _status = None
    
    # ...

    def is_open(self):
        return self._open

    def open(self, correlation_id):
        self._open = True
        self._status = "Open"
        print("MyComponentA has been opened.")


```

