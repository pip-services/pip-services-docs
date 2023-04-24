
```python
# Controller's descriptor is defined in the configuration file
class MyCommandableCloudFunction(CommandableCloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._controller: MyController = None
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))

```