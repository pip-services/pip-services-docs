
```python
from pip_services4_components.config import IConfigurable, ConfigParams

class MyComponentA(IConfigurable):
    _param1 = 'ABC'
    _param2 = 123
    _open = False
    _status = None
    
    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("MyComponentA has been created.")
            
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", 'ABC')
        self._param2 = config.get_as_integer_with_default("param2", 123)
        self._status = "Configured"
        print("MyComponentA has been configured.")

```
