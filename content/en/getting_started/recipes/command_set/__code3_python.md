
```python
class MyCommandSet(CommandSet):
    _controller = None

    def __init__(self, controller):
        super(MyCommandSet, self).__init__()
        self.add_command(self._command1())
        
    def _command1(self):
        def handler(correlation_id, args):
            return print("command 1")
        return Command("command1",None,handler)
```
