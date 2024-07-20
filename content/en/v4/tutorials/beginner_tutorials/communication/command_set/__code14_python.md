
```python
class MyCommandSetB(CommandSet):

    def __init__(self, service):
        super(MyCommandSetB, self).__init__()
        self.add_command(self._command1B())
        
    def _command1B(self):
        def handler(context, args):
            return print("command 1B")
        return Command("command1B",None,handler)

class MyCommandSet(CommandSet):

    _command_set = MyCommandSetB(None)
    def __init__(self, service):
        super(MyCommandSet, self).__init__()
        self.add_command(self._command1())
        self.add_commands([self._command2(),self._command3()])
        self.add_command_set(self._command_set)
        
    def _command1(self):
        def handler(context, args):
            return print("command 1")
        return Command("command1",None,handler)
    
    def _command2(self):
        def handler(context, args):
            return print("command 2")
        return Command("command2",None,handler)
   
    def _command3(self):
        def handler(context, args):
            return print("command 3")
        return Command("command3",None,handler)  
    
mySet = MyCommandSet(None)

mySet.execute(None, "command1", None)
mySet.execute(None, "command2", None)
mySet.execute(None, "command3", None)
mySet.execute(None, "command1B", None)

```
