
```python
from pip_services4_components.config import IConfigurable
from pip_services4_components.refer import IReferences, IReferenceable
from typing import Optional


class HelloFriendService(IConfigurable, IReferenceable):
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

    def create(self, trace_id: Optional[str], item: MyFriend) -> MyFriend:
        res = self.__persistence.create(trace_id, item)
        return res
```
