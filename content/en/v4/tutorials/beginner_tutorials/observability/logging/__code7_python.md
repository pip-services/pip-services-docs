
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences, Descriptor, IUnreferenceable
from pip_services4_components.run import IOpenable, ICleanable
from pip_services4_observability.log import ConsoleLogger, LogLevel, CompositeLogger

class MyComponentB(IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable):
    _param1 = 'ABC2'
    _param2 = 456
    _opened = False

    __logger = ConsoleLogger()
    __logger.set_level(5)

    dummy_variable = "resource variable"
    
    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        self.__logger.info(None, "MyComponentB has been created.")
        
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", self._param1)
        self._param2 = config.get_as_integer_with_default("param2", self._param2)
        
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
        """
        Unsets (clears) previously set references to dependent components.
        """
        pass
    
    def clear(self, context):
        """
        Clears component state.
        :param context: (optional) transaction id to trace execution through call chain.
        """
        pass



class MyComponentA(IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _open = False
    _status = None
    __logger = CompositeLogger()
    __logger.set_level(5)

    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        
        self.__logger.info(None, "MyComponentA has been created.")

            
    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", 'ABC')
        self._param2 = config.get_as_integer_with_default("param2", 123)
        self._status = "Configured"
        self.__logger.configure(config)
        

    def set_references(self, references):
        self._another_component = references.get_one_required(
            Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        )
        self._status = "Configured"
        self.__logger.set_references(references)
        self.__logger.info(None,"MyComponentA's references have been defined.")
        
    def is_open(self):
        return self._open

    def open(self, context):
        self._open = True
        self._status = "Open"
        self.__logger.info(None,"MyComponentA has been opened.")
        # artificial problem
        self.my_task(context)

    def close(self, context):
        self._opened = False
        self._status = "Closed"
        self.__logger.info(context,"MyComponentA has been closed.")
        
    def my_task(self, context):
        # create an artificial problem        
        try:
            raise Exception('Logging demo', 'Error created')
        except Exception as inst:
            self.__logger.error(context, inst, "Error created.")  

    def unset_references(self):
        """
        Unsets (clears) previously set references to dependent components.
        """
        self._another_component = None
        self._status = "Un-referenced"
        self.__logger.info(None, "References cleared")
    
    def clear(self, context):
        """
        Clears component state.
        :param context: (optional) transaction id to trace execution through call chain.
        """
        self.dummy_variable = None
        self._status = None
        self.__logger.info(context, "Resources cleared")
```
