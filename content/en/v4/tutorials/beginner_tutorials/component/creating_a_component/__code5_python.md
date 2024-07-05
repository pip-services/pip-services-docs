
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor
from pip_services4_components.run import IOpenable

class MyComponentB():
    _param1 = 'ABC2'        
    # ...
    
class MyComponentA(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _open = False
    _status = None
    dummy_variable = ""
    
    # ...

    def my_task(self, context):
        print("Doing my business task")
        dummy_variable = "dummy value"

```

