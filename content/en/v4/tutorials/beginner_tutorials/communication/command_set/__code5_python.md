
```python
class MyCommandSetB(CommandSet):
    _service = None
    def __init__(self, service):
        super(MyCommandSetB, self).__init__()
        self.add_command(self._command1B())
        
    def _command1B(self):
        def handler(context, args):
            return print("command 1B")
        return Command("command1B",None,handler)
    
class MyCommandSet(CommandSet):
    _service = None
    _command_set = MyCommandSetB(None)
    def __init__(self, context):
        super(MyCommandSet, self).__init__()
        self.add_command_set(self._command_set)
```
