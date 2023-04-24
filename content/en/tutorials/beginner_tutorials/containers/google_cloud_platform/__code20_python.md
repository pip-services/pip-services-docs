
```python
class MyCommandSet(CommandSet):
    _controller: 'MyController'

    def __init__(self, controller):
        super().__init__()
        self._controller = controller
        self.add_command(self._make_greeting())

    def _make_greeting(self):
        def handler(correlation_id: Optional[str], args: Parameters):
            name = args.get_as_string("name")
            res = self._controller.greeting(name)
            return res

        return Command(
            "greetings",
            ObjectSchema(True).with_required_property("name", TypeCode.String),
            handler
        )

```