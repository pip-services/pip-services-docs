
```python
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
```
