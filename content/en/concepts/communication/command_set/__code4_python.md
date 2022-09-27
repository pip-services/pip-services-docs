
```python
class MyCommandSet(CommandSet):
    _controller = None

    def __init__(self, controller):
        super(MyCommandSet, self).__init__()
        self.add_commands([self._command2(),self._command3()])
    
    def _command2(self):
        def handler(correlation_id, args):
            return print("command 2")
        return Command("command2",None,handler)
   
    def _command3(self):
        def handler(correlation_id, args):
            return print("command 3")
        return Command("command3",None,handler) 
```
