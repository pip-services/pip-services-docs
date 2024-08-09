
```python
from pip_services4_components.refer import Descriptor
from pip_services4_data.validate import Schema
from pip_services4_http.controller import RestController
from pip_services4_rpc.commands import Command, CommandSet, ICommand
from pip_services4_components.exec import Parameters
from pip_services4_data.validate import Schema, ObjectSchema
from pip_services4_commons.convert import TypeCode
from pip_services4_http.controller import CommandableHttpController
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build import DefaultRpcFactory
from pip_services4_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory         
from pip_services4_rpc.commands import ICommandable
from pip_services4_components.config import IConfigurable
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory
from pip_services4_components.context import IContext
from typing import Optional

import bottle

# REST controller (Swagger UI from YAML file)

class HelloFriendRestController(RestController):

    def __init__(self):
        super(HelloFriendRestController, self).__init__()

        self._base_route = "/hello_friend"

        ServiceDescriptor = Descriptor('hello-friend', 'service', '*', '*', '1.0')
        self._dependency_resolver.put('service', ServiceDescriptor)
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
        super(HelloFriendRestController, self).set_references(references)
        self._service = self._dependency_resolver.get_one_required('service')

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        
        # Swagger
        if self._swagger_content:
            self._register_open_api_spec(self._swagger_content)

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)

    def greeting(self):
        name = bottle.request.query.get('name')
        result = self._service.greeting(name)
        return self.send_result(result)

# Command set    

class FriendsCommandSet(CommandSet):
    _service: 'HelloFriendService'

    def __init__(self, service):
        super().__init__()

        self._service = service
        self.add_command(self._make_greeting())

    def _make_greeting(self) -> ICommand:
        def handler(context: Optional[IContext], args: Parameters):
            name = args.get_as_string("name")
            res = self._service.greeting(name)
            return res

        return Command(
            "greeting",
            ObjectSchema(True).with_required_property("name", TypeCode.String),
            handler
        )
    
# Commandable REST controller (Swagger UI automatically generated from command set)

class FriendCommandableHttpController1(CommandableHttpController):

    def __init__(self):
        super().__init__('commandable_hello_friend1')
        self._dependency_resolver.put('service', Descriptor('hello-friend', 'service', '*', '*', '*'))

        self._swagger_path = None
        
    def configure(self, config):
        super().configure(config)

        # Swagger
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def register(self):
        super().register()
        
        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)

# Commandable REST controller (Swagger UI generated from YAML file)            

class FriendCommandableHttpController2(CommandableHttpController):

    def __init__(self):
        super().__init__('commandable_hello_friend2')
        self._dependency_resolver.put('service', Descriptor('hello-friend', 'service', '*', '*', '*'))

        self._swagger_path = None
        
    def configure(self, config):
        super().configure(config)

        # Swagger
        self._swagger_path = config.get_as_nullable_string('swagger.path')

    def register(self):
        super().register()

        if self._swagger_path:
            self._register_open_api_spec_from_file(self._swagger_path)
            
# Service

class HelloFriendService(IConfigurable, ICommandable): 
                                          
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

# Factory

class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

        HttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'http', '*', '1.0')                          # Controller
        CommandableHttpControllerDescriptor1 = Descriptor('hello-friend', 'controller', 'commandable-http1', '*', '1.0') # Controller
        CommandableHttpControllerDescriptor2 = Descriptor('hello-friend', 'controller', 'commandable-http2', '*', '1.0') # Controller
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')                     # Service
                                                                                
            
        self.register_as_type(HttpControllerDescriptor, HelloFriendRestController)                       # Controler
        self.register_as_type(CommandableHttpControllerDescriptor1, FriendCommandableHttpController1)    # Controller
        self.register_as_type(CommandableHttpControllerDescriptor2, FriendCommandableHttpController2)    # Controller
        self.register_as_type(ServiceDescriptor, HelloFriendService)                         # Service
        
# Container

class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config35.yaml'
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
