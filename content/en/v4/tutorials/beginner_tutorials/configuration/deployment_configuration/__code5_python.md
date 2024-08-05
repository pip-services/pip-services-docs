
```python
from pip_services4_data.data import IStringIdentifiable


class MyFriend(IStringIdentifiable):
    def __init__(self, id: str, type: str, name: str):
        self.id = id
        self.type = type
        self.name = name



import bottle
from pip_services4_data.validate import Schema
from pip_services4_http.controller import RestController


class HelloFriendRestController(RestController):

    def __init__(self):
        super(HelloFriendRestController, self).__init__()

        self._base_route = "/hello_friend"
        self._service: HelloFriendService = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestController, self).set_references(references)
        self._controller = references.get_one_required(Descriptor('hello-friend', 'controller', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        self.register_route(method="GET", route="/greeting_create", schema=Schema(), handler=self.create)

    def greeting(self):
        result = self._service.greeting()
        return self.send_result(result)

    def create(self):
        trace_id = self._get_trace_id()
        item = MyFriend(
            bottle.request.query["id"],
            bottle.request.query["type"],
            bottle.request.query["name"]
        )
        result = self._service.create(trace_id, item)

        return self.send_result(result)



from pip_services4_rpc.commands import ICommandable
from pip_services4_components.config import IConfigurable
from pip_services4_components.refer import IReferences, IReferenceable


class HelloFriendService(IConfigurable, IReferenceable):
    __defaultName = None
    __persistence: IMyDataPersistence = None

    def __init__(self):
        self.__defaultName = "Pip User"

    def configure(self, config):
        self.__defaultName = config.get_as_string_with_default("default_name", self.__defaultName)

    def set_references(self, references: IReferences):
        self.__persistence = references.get_one_required(Descriptor("hello-friend", "persistence", "*", "*", "1.0"))

    def greeting(self):
        filter_param = FilterParams.from_tuples("type", "friend")
        selected_friend = self.__persistence.get_one_random(None, filter_param)
        name2 = selected_friend.name

        return f"Hello, {name2} !"

    def create(self, trace_id: Optional[str], item: MyFriend) -> MyFriend:
        res = self.__persistence.create(trace_id, item)
        return res

    
    
from abc import ABC
from typing import Optional
from pip_services4_data.query import FilterParams


class IMyDataPersistence(ABC):

    # CRUD operations
    def get_one_random(self, trace_id: Optional[str], filter: FilterParams) -> MyFriend:
        raise NotImplemented()

    def create(self, trace_id: Optional[str], item: MyFriend) -> MyFriend:
        raise NotImplemented()
        


from pip_services4_mysql.persistence import IdentifiableMySqlPersistence


class HelloFriendPersistence1(IdentifiableMySqlPersistence, IMyDataPersistence):

    def __init__(self):
        super(HelloFriendPersistence1, self).__init__('myfriends3')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema(
            'CREATE TABLE IF NOT EXISTS `' + self._table_name + '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)')

    def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        type = filter.get_as_nullable_string('type')
        name = filter.get_as_nullable_string('name')

        filter_condition = ''
        if type is not None:
            filter_condition += "`type`='" + type + "'"
        if name is not None:
            filter_condition += "`name`='" + name + "'"

        return filter_condition

    def get_one_random(self, trace_id: str, filter: FilterParams) -> MyFriend:
        return super().get_one_random(trace_id, self._compose_filter(filter))


       
from pip_services4_postgres.persistence import IdentifiablePostgresPersistence


class HelloFriendPersistence2(IdentifiablePostgresPersistence, IMyDataPersistence):

    def __init__(self):
        super().__init__('myfriends3')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema('CREATE TABLE IF NOT EXISTS ' + self._table_name + ' (id TEXT PRIMARY KEY, type TEXT, name TEXT)')

    def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        key = filter.get_as_nullable_string('key')
        content = filter.get_as_nullable_string('content')

        filter_condition = ''
        if key is not None:
            filter_condition += "key='" + key + "'"
        if content is not None:
            filter_condition += "content='" + content + "'"

        return filter_condition

    def get_one_random(self, trace_id: Optional[str], filter: FilterParams) -> MyFriend:
        return super().get_one_random(trace_id, self._compose_filter(filter))



from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory


class HelloFriendControllerFactory(Factory):
    def __init__(self):
        super(HelloFriendControllerFactory, self).__init__()

        HttpControllerDescriptor = Descriptor('hello-friend', 'controller', 'http', '*', '1.0')  # Controller
        ServiceDescriptor = Descriptor('hello-friend', 'service', 'default', '*', '1.0')  # Service
        PersistenceDescriptor1 = Descriptor('hello-friend', 'persistence', 'mysql', '*', '1.0')  # Persistence
        PersistenceDescriptor2 = Descriptor('hello-friend', 'persistence', 'postgres', '*', '1.0')  # Persistence

        self.register_as_type(HttpControllerDescriptor, HelloFriendRestController)  # View
        self.register_as_type(ServiceDescriptor, HelloFriendService)  # Service
        self.register_as_type(PersistenceDescriptor1, HelloFriendPersistence1)  # Persistence
        self.register_as_type(PersistenceDescriptor2, HelloFriendPersistence2)  # Persistence


       
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build import DefaultRpcFactory


class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './configDTC.yaml'
        self._factories.add(HelloFriendControllerFactory())
        self._factories.add(DefaultRpcFactory())

# Step 1 - Database selection
import os

os.environ["MYSQL_ENABLED"] = "True"
# os.environ["POSTGRES_ENABLED"] = "True"

# Step 2 - The run() command
if __name__ == '__main__':
    runner = HelloFriendProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)
```
