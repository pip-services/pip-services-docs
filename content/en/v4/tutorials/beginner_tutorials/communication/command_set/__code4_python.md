
```python
class MyCommandSet(CommandSet):
    _service = None

    def __init__(self, service):
        super(MyCommandSet, self).__init__()
        self.add_commands([self._command2(),self._command3()])
    
    def _command2(self):
        def handler(context, args):
            return print("command 2")
        return Command("command2",None,handler)
   
    def _command3(self):
        def handler(context, args):
            return print("command 3")
        return Command("command3",None,handler) 
```
