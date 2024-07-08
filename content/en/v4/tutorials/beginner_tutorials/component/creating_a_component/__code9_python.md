
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor, IUnreferenceable
from pip_services4_components.run import IOpenable

class MyComponentB(IReferenceable, IUnreferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC2'
    _param2 = 456
    _opened = False

    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("MyComponentB has been created.")
        
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", self._param1)
        self._param2 = config.get_as_integer_with_default("param2", self._param2)
        print("MyComponentB has been configured.")
        
    def set_references(self, references):
        pass
        
    def is_open(self):
        pass

    def open(self, context):
        pass

    def close(self, context):
        pass
        
    def my_task(self, context):
        pass

    def unset_references(self):
        pass
    
    def __del__(self):
        pass



class MyComponentA(IReferenceable, IUnreferenceable, IConfigurable, IOpenable):
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
        
    def is_open(self):
        return self._open

    def open(self, context):
        self._open = True
        self._status = "Open"
        print("MyComponentA has been opened.")

    def close(self, context):
        self._opened = False
        self._status = "Closed"
        print("MyComponentA has been closed.")
        
    def my_task(self, context):
        print("Doing my business task")
        dummy_variable = "dummy value"

    def unset_references(self):
        """
        Unsets (clears) previously set references to dependent components.
        """
        self._another_component = None
        self._status = "Un-referenced"
        print("References cleared")
    
    def __del__(self):
        print("Component destroyed")

```

