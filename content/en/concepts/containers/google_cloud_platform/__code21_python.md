
```python
class MyController(IReferenceable, ICommandable):

    def __init__(self):
        super().__init__()
        self.__command_set = None

    def get_command_set(self):
        if self.__command_set is None:
            self.__command_set = MyCommandSet(self)
        return self.__command_set

    def set_references(self, references):
        pass

    def greeting(self, name):
        return f"Hello, {name} !"

```