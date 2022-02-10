
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService

import bottle

# REST service (Swagger UI from YAML file)

class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"

        ControllerDescriptor = Descriptor('hello-friend', 'controller', '*', '*', '1.0')
        self._dependency_resolver.put('controller', ControllerDescriptor)
        self._controller = None

        # Swagger
        self._swagger_content = None
        self._swagger_path = None

    def configure(self, config):
        super().configure(config)
        
        # Swagger
        self._swagger_content = config.get_as_nullable_string("swagger.content")
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        
        # Swagger
        if self._swagger_content:
            self._register_open_api_spec(self._swagger_content)

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)

    def greeting(self):
        name = bottle.request.query.get('name')
        result = self._controller.greeting(name)
        return self.send_result(result)

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
    
# Commandable REST service (Swagger UI automatically generated from command set)
    
from pip_services3_rpc.services import CommandableHttpService

class FriendCommandableHttpService1(CommandableHttpService):

    def __init__(self):
        super().__init__('commandable_hello_friend1')
        self._dependency_resolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'))

        self._swagger_path = None
        
    def configure(self, config):
        super().configure(config)

        # Swagger
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def register(self):
        super().register()
        
        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)

# Commandable REST service (Swagger UI generated from YAML file)            
            
from pip_services3_rpc.services import CommandableHttpService

class FriendCommandableHttpService2(CommandableHttpService):

    def __init__(self):
        super().__init__('commandable_hello_friend2')
        self._dependency_resolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'))

        self._swagger_path = None
        
    def configure(self, config):
        super().configure(config)

        # Swagger
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def register(self):
        super().register()

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)
            
# Controller
            
from pip_services3_commons.commands import ICommandable
from pip_services3_commons.config import IConfigurable

class HelloFriendController(IConfigurable, ICommandable): 
                                          
    __defaultName = None
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
    
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

# Factory

class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

        HttpServiceDescriptor = Descriptor('hello-friend', 'service', 'http', '*', '1.0')                          # View 1
        CommandableHttpServiceDescriptor1 = Descriptor('hello-friend', 'service', 'commandable-http1', '*', '1.0') # View 2
        CommandableHttpServiceDescriptor2 = Descriptor('hello-friend', 'service', 'commandable-http2', '*', '1.0') # View 2
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')                     # Controller
                                                                                
            
        self.register_as_type(HttpServiceDescriptor, HelloFriendRestService)                       # View 1
        self.register_as_type(CommandableHttpServiceDescriptor1, FriendCommandableHttpService1)    # View 2
        self.register_as_type(CommandableHttpServiceDescriptor2, FriendCommandableHttpService2)    # View 3
        self.register_as_type(ControllerDescriptor, HelloFriendController)                         # Controller
        
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory
from pip_services3_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory

# Container

class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config.yml'
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
