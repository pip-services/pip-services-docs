
```python
# Command set

from pip_services4_rpc.commands import Command, CommandSet, ICommand
from pip_services4_components.exec import Parameters
from pip_services4_data.validate import Schema, ObjectSchema
from pip_services4_commons.convert import TypeCode
from pip_services4_rpc.commands import ICommandable
from pip_services4_components.config import IConfigurable
from pip_services4_http.controller import CommandableHttpController
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build import DefaultRpcFactory
from pip_services4_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory
from typing import Optional

class FriendsCommandSet(CommandSet):
    _service: 'HelloFriendService'

    def __init__(self, service):
        super().__init__()

        self._service = service

        self.add_command(self._make_greeting())

    def _make_greeting(self) -> ICommand:
        def handler(context: Optional[IContext], args: Parameters):
            name = args.get_as_string("name")
            res = self._controller.greeting(name)
            return res

        return Command(
            "greeting",
            ObjectSchema(True).with_required_property("name", TypeCode.String),
            handler
        )

# Service


class HelloFriendService(IConfigurable, ICommandable): 
                                          
    __defaultName = "World"
    __command_set: 'FriendsCommandSet' = None
        
    def __init__(self):
        self.__defaultName = "Pip User"

    def configure(self, config):
        self.__defaultName = config.get_as_string_with_default("default_name", self.__defaultName)
        
    def get_command_set(self) -> CommandSet:
        if self.__command_set is None:
            self.__command_set = FriendsCommandSet(self)

        return self.__command_set

    def greeting(self, name):
        return f"Hello, {name if name else self.__defaultName} !"
    
# Controller    

class FriendCommandableHttpController(CommandableHttpController):

    def __init__(self):
        super().__init__('commandable_hello_friend')
        self._dependency_resolver.put('service', Descriptor('hello-friend', 'service', '*', '*', '*'))

        
# Factory

class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

 
        CommandableHttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'commandable-http', '*', '1.0') # Controller
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')                   # Service
                                                                                
            

        self.register_as_type(CommandableHttpControllerDescriptor, FriendCommandableHttpController)    # Controller 
        self.register_as_type(ServiceDescriptor, HelloFriendService)                       # Service


# Container
class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config2DComm.yaml'
        self._factories.add(HelloFriendControllerFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())
 
 # Runner 
if __name__ == '__main__':
    runner = HelloFriendProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)

```
