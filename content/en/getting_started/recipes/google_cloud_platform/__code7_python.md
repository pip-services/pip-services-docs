
```python
# Controller is added as a dependency
class MyCommandableCloudFunction(CommandableCloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._controller: MyController = None
        self._config_path = './config.yaml'
        self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._factories.add(MyFactory())

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')



```