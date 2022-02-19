
```python
class MyCommandSetB(CommandSet):
    _controller = None
    def __init__(self, controller):
        super(MyCommandSetB, self).__init__()
        self.add_command(self._command1B())
        
    def _command1B(self):
        def handler(correlation_id, args):
            return print("command 1B")
        return Command("command1B",None,handler)
    
class MyCommandSet(CommandSet):
    _controller = None
    _commandSet = MyCommandSetB(None)
    def __init__(self, controller):
        super(MyCommandSet, self).__init__()
        self.add_command_set(self._commandSet)
```
