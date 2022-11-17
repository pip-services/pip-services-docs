
```python
from typing import Optional
from pip_services3_gcp.containers import CloudFunction
from pip_services3_gcp.services import CommandableCloudFunctionService
from pip_services3_commons.refer import Descriptor, IReferences, IReferenceable
from pip_services3_components.build import Factory
from pip_services3_commons.commands import Command, CommandSet, ICommandable
from pip_services3_commons.convert import TypeCode
from pip_services3_commons.run import Parameters
from pip_services3_commons.validate import ObjectSchema

class MyCommandSet(CommandSet):
    _controller: 'MyController'

    def __init__(self, controller):
        super().__init__()
        self._controller = controller
        self.add_command(self._make_greeting())

    def _make_greeting(self):
        def handler(correlation_id: Optional[str], args: Parameters):
            name = args.get_as_string("name")
            res = self._controller.greeting(name)
            return res

        return Command(
            "greetings",
            ObjectSchema(True).with_required_property("name", TypeCode.String),
            handler
        )
    
class MyCommandableCloudService(CommandableCloudFunctionService):
    def __init__(self):
        super().__init__('mygroup')
        # The ‘controller’ dependency is required by all Commandable services 
        self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))
    
class MyController(IReferenceable, ICommandable):

    def __init__(self):
        super().__init__()
        self.__command_set = None

    def get_command_set(self):
        if self.__command_set is None:
            self.__command_set = MyCommandSet(self)
        return self.__command_set

    def set_references(self, references):
        pass

    def greeting(self, name):
        return f"Hello, {name} !"   

class MyFactory(Factory):

    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)
        self.register_as_type(Descriptor("mygroup", "service", "commandable-gcp-function", "function", "1.0"), MyCommandableCloudService)
        
class MyCloudFunction(CloudFunction):
    def __init__(self):
        super().__init__("mygroup", "Mygroup service")
        self._controller: MyController = None
        self._service: MyCloudFunction = None
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
        # Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        # self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        # self._dependency_resolver.put('service', Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))

    def set_references(self, references: IReferences):
        super().set_references(references)
        # Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        # self._controller = self._dependency_resolver.get_one_required('controller')
        # self._service = self._dependency_resolver.get_one_required('service') 
        # Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._service = references.get_one_required(Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))

```