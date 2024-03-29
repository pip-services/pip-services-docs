
```python
# Data object
from typing import Optional

import bottle
from pip_services3_commons.data import IStringIdentifiable, FilterParams


class MyFriend(IStringIdentifiable):
    def __init__(self, id: str, type: str, name: str):
        self.id = id
        self.type = type
        self.name = name


from pip_services3_commons.validate import Schema
from pip_services3_rpc.services import RestService


# Tier 1: View
class HelloFriendRestService(RestService):

    def __init__(self):
        super(HelloFriendRestService, self).__init__()

        self._base_route = "/hello_friend"
        self._controller: HelloFriendController = None

    def configure(self, config):
        super().configure(config)

    def set_references(self, references):
        super(HelloFriendRestService, self).set_references(references)
        self._controller = references.get_one_required(Descriptor('hello-friend', 'controller', '*', '*', '1.0'))

    def register(self):
        self.register_route(method="GET", route="/greeting", schema=Schema(), handler=self.greeting)
        self.register_route(method="GET", route="/greeting_create", schema=Schema(), handler=self.create)

    def greeting(self):
        result = self._controller.greeting()
        return self.send_result(result)

    def create(self):
        correlation_id = self._get_correlation_id()
        item = MyFriend(
            bottle.request.query["id"],
            bottle.request.query["type"],
            bottle.request.query["name"]
        )
        result = self._controller.create(correlation_id, item)

        return self.send_result(result)


# Tier 2 : Controller
from pip_services3_commons.config import IConfigurable
from pip_services3_commons.refer import IReferences, IReferenceable


class HelloFriendController(IConfigurable, IReferenceable):
    __defaultName = None
    __persistence: 'HelloFriendPersistence' = None

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

    def create(self, correlation_id: Optional[str], item: MyFriend) -> MyFriend:
        res = self.__persistence.create(correlation_id, item)
        return res


# Tier 3 = Persistence
from pip_services3_mysql.persistence import IdentifiableMySqlPersistence


class HelloFriendPersistence(IdentifiableMySqlPersistence):

    def __init__(self):
        super(HelloFriendPersistence, self).__init__('myfriends3')

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

    def get_one_random(self, correlation_id: str, filter: FilterParams) -> MyFriend:
        return super().get_one_random(correlation_id, self._compose_filter(filter))


from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


# Inversion of control: Factory
class HelloFriendServiceFactory(Factory):
    def __init__(self):
        super(HelloFriendServiceFactory, self).__init__()

        HttpServiceDescriptor = Descriptor('hello-friend', 'service', 'http', '*', '1.0')  # View
        ControllerDescriptor = Descriptor('hello-friend', 'controller', 'default', '*', '1.0')  # Controller
        PersistenceDescriptor = Descriptor('hello-friend', 'persistence', 'mysql', '*', '1.0')  # Persistence

        self.register_as_type(HttpServiceDescriptor, HelloFriendRestService)  # View
        self.register_as_type(ControllerDescriptor, HelloFriendController)  # Controller
        self.register_as_type(PersistenceDescriptor, HelloFriendPersistence)  # Persistence


# Containerization
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory


class HelloFriendProcess(ProcessContainer):

    def __init__(self):
        super(HelloFriendProcess, self).__init__('hello-friend', 'HelloFriend microservice')
        self._config_path = './config.yaml'
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
