
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor, IUnreferenceable
from pip_services4_components.run import IOpenable, ICleanable

class ComponentB(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC2'
    _param2 = 456
    _opened = False

    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("ComponentB has been created.")
        
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", self._param1)
        self._param2 = config.get_as_integer_with_default("param2", self._param2)
        print("ComponentB has been configured.")
        
    def set_references(self, references):
        pass
        
    def is_open(self):
        pass

    def open(self, correlation_id):
        pass

    def close(self, correlation_id):
        pass
        
    def my_task(self, correlation_id):
        pass

    def unset_references(self):
        """
        Unsets (clears) previously set references to dependent components.
        """
        pass


class ComponentA1(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: ComponentB
    _open = False
    _status = None
    
    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("ComponentA1 has been created.")
            
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", 'ABC')
        self._param2 = config.get_as_integer_with_default("param2", 123)
        self._status = "Configured"
        print("ComponentA1 has been configured.")

    def set_references(self, references):
        self._another_component = references.get_one_required(
            Descriptor("myservice", "component-b", "*", "*", "1.0")
        )
        self._status = "Configured"
        print("ComponentA1's references have been defined.")
        
    def is_open(self):
        return self._open

    def open(self, correlation_id):
        self._open = True
        self._status = "Open"
        print("ComponentA1 has been opened.")

    def close(self, correlation_id):
        self._opened = False
        self._status = "Closed"
        print("ComponentA1 has been closed.")
        
    def my_task(self, correlation_id):
        print("Doing my business task")
        dummy_variable = "dummy value"

    def unset_references(self):
        """
        Unsets (clears) previously set references to dependent components.
        """
        self._another_component = None
        self._status = "Un-referenced"
        print("References cleared")
        
        
class ComponentA2(IReferenceable, IConfigurable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: ComponentB
    _open = False
    _status = None
    
    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("ComponentA2 has been created.")
            
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", 'ABC')
        self._param2 = config.get_as_integer_with_default("param2", 123)
        self._status = "Configured"
        print("ComponentA2 has been configured.")

    def set_references(self, references):
        self._another_component = references.get_one_required(
            Descriptor("myservice", "component-b", "*", "*", "1.0")
        )
        self._status = "Configured"
        print("ComponentA2's references have been defined.")
        
    def is_open(self):
        return self._open

    def open(self, correlation_id):
        self._open = True
        self._status = "Open"
        print("ComponentA2 has been opened.")

    def close(self, correlation_id):
        self._opened = False
        self._status = "Closed"
        print("ComponentA2 has been closed.")
        
    def my_task(self, correlation_id):
        print("Doing my business task")
        dummy_variable = "dummy value"

    def unset_references(self):
        """
        Unsets (clears) previously set references to dependent components.
        """
        self._another_component = None
        self._status = "Un-referenced"
        print("References cleared")

```
