
```python
from pip_services4_rpc.commands import Command, CommandSet, ICommand
from pip_services4_components.exec import Parameters
from pip_services4_data.validate import Schema, ObjectSchema
from pip_services4_commons.convert import TypeCode
from typing import Optional

class FriendsCommandSet(CommandSet):
    _service: 'HelloFriend'

    def __init__(self, service):
        super().__init__()

        self._context = service

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
```
