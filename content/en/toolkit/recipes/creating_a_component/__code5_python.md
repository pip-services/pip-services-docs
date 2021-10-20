
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
    dummy_variable = ""
    
    # ...

    def my_task(self, correlation_id):
        print("Doing my business task")
        dummy_variable = "dummy value"

```

