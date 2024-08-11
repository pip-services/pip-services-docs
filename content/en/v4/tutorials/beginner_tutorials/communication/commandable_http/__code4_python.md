
```python
from pip_services4_rpc.commands import ICommandable
from pip_services4_components.config import IConfigurable

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
```
