
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor

class MyComponentB():
    _param1 = 'ABC2'
    _param2 = 456
    _opened = False
    _status = None

    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("MyComponentB has been created.")

class MyComponentA(IReferenceable, IConfigurable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
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
    def set_references(self, references):
        self._another_component = references.get_one_required(
            Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        )
        self._status = "Configured"
        print("MyComponentA's references have been defined.")


```

