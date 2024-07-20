
```python
class MyCommandSet(CommandSet):
    _service = None

    def __init__(self, service):
        super(MyCommandSet, self).__init__()
        self.add_command(self._command1())
        
    def _command1(self):
        def handler(context, args):
            return print("command 1")
        return Command("command1",None,handler)
```
