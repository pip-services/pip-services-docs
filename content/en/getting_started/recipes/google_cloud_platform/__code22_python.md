
```python
class MyCommandableCloudService(CommandableCloudFunctionService):
    def __init__(self):
        super().__init__('mygroup')
        # The 'controller' dependency is required by all Commandable services 
        self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))

```