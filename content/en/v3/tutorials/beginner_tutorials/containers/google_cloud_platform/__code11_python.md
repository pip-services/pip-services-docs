
```python
from typing import Optional
from pip_services3_commons.commands import Command, CommandSet
from pip_services3_commons.convert import TypeCode
from pip_services3_commons.run import Parameters
from pip_services3_commons.validate import ObjectSchema
from pip_services3_commons.refer import IReferenceable, IReferences, Descriptor
from pip_services3_commons.commands import ICommandable
from pip_services3_components.build import Factory
from pip_services3_gcp.containers import CommandableCloudFunction

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

class MyController(IReferenceable, ICommandable):

    def __init__(self):
        super().__init__()
        self.__command_set = None

    def set_references(self, references):
        pass

    def get_command_set(self):
        if self.__command_set is None:
            self.__command_set = MyCommandSet(self)
        return self.__command_set

    def greeting(self, name):
        return f"Hello, {name} !"

class MyFactory(Factory):
    
    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)

class MyCommandableCloudFunction(CommandableCloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._controller: MyController = None
        self._config_path = './config.yaml'
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._factories.add(MyFactory())

    def set_references(self, references: IReferences):
        super().set_references(references)
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._controller = self._dependency_resolver.get_one_required('controller')   
        # Comment out the next line of code when using dependency resolver, uncomment for configuration file    
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))  

```