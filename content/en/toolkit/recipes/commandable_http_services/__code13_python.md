

```python
# Command set

from pip_services3_commons.commands import Command, CommandSet, ICommand
from pip_services3_commons.run import Parameters
from pip_services3_commons.validate import Schema, ObjectSchema
from pip_services3_commons.convert import TypeCode
from typing import Optional

class FriendsCommandSet(CommandSet):
    _controller: 'HelloFriendController'

    def __init__(self, controller):
        super().__init__()

        self._controller = controller

        self.add_command(self._make_greeting())

    def _make_greeting(self) -> ICommand:
        def handler(correlation_id: Optional[str], args: Parameters):
            name = args.get_as_string("name")
            res = self._controller.greeting(name)
            return res

        return Command(
            "greeting",
            ObjectSchema(True).with_required_property("name", TypeCode.String),
            handler
        )

# Controller
from pip_services3_commons.commands import ICommandable
from pip_services3_commons.config import IConfigurable

class HelloFriendController(IConfigurable, ICommandable): 
                                          
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
    
# Service    
from pip_services3_rpc.services import CommandableHttpService

class FriendCommandableHttpService(CommandableHttpService):

    def __init__(self):
        super().__init__('commandable_hello_friend')
        self._dependency_resolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'))

        
# Factory
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

 
        CommandableHttpServiceDescriptor = Descriptor('hello-friend', 'service', 'commandable-http', '*', '1.0') # View 
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')                   # Controller
                                                                                
            

        self.register_as_type(CommandableHttpServiceDescriptor, FriendCommandableHttpService)    # View 
        self.register_as_type(ControllerDescriptor, HelloFriendController)                       # Controller

        

from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory
from pip_services3_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory


# Container
class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config2DComm.yaml'
        self._factories.add(HelloFriendServiceFactory())
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
