
```python
# Data object
from pip_services3_commons.data import IStringIdentifiable

class MyFriend(IStringIdentifiable):
    def __init__(self, id, type, name):
        self.id = id
        self.type = type
        self.name = name
        
import bottle
from pip_services3_commons.data import IStringIdentifiable
from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService

# Tier 1: View
class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"

        ControllerDescriptor = Descriptor('hello-friend', 'controller', '*', '*', '1.0')
     #   self._dependency_resolver.put('controller', ControllerDescriptor)
        self._controller = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        #self._controller = self._dependency_resolver.get_one_required('controller')
        self._controller = references.get_one_required(Descriptor('hello-friend', 'controller', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)

    def greeting(self):
       # name = bottle.request.query.get('name')
        result = self._controller.greeting()
        return self.send_result(result)

# Tier 2 : Controller
from pip_services3_commons.commands import ICommandable
from pip_services3_commons.config import IConfigurable
from pip_services3_commons.refer import IReferences, IReferenceable


class HelloFriendController(IConfigurable, ICommandable, IReferenceable):
    __defaultName = None
    __command_set: 'FriendsCommandSet' = None

    __persistence: 'HelloFriendPersistence' = None

    def __init__(self):
        self.__defaultName = "Pip User"

    def configure(self, config):
        self.__defaultName = config.get_as_string_with_default("default_name", self.__defaultName)

    def set_references(self, references: IReferences):
        self.__persistence = references.get_one_required(Descriptor("hello-friend", "persistence", "*", "*", "1.0"))

    def greeting(self):
        selected_friend = self.__persistence.get_one_random(None, "type='friend'")
        name2 = selected_friend.name

        return f"Hello, {name2} !"

    
# Tier 3 = Persistence
from pip_services3_mysql.persistence import IdentifiableMySqlPersistence


class HelloFriendPersistence(IdentifiableMySqlPersistence):

    def __init__(self):
        super(HelloFriendPersistence, self).__init__('myfriends3')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema(
            'CREATE TABLE IF NOT EXISTS `' + self._table_name + '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)')
        
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

# Inversion of control: Factory
class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

        HttpServiceDescriptor = Descriptor('hello-friend', 'service', 'http', '*', '1.0')  # View
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')  # Controller
        PersistenceDescriptor = Descriptor('hello-friend', 'persistence', 'mysql', '*',
                                           '1.0')  # Persistence                                                                           # Persistence

        self.register_as_type(HttpServiceDescriptor, HelloFriendRestService)  # View
        self.register_as_type(ControllerDescriptor, HelloFriendController)  # Controller
        self.register_as_type(PersistenceDescriptor, HelloFriendPersistence)  # Persistence

# Containerization
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory


class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config2D4.yaml'
        self._factories.add(HelloFriendServiceFactory())
        self._factories.add(DefaultRpcFactory())
        
# Running the app

if __name__ == '__main__':
    runner = HelloFriendProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)
```
