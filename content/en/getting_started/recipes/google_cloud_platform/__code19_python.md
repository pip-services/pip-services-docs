
```python
# Controller and service are added as dependencies
class MyCloudFunction(CloudFunction):
    def __init__(self):
        super().__init__("mygroup", "Mygroup service")
        self._controller: MyController = None
        self._service: MyCloudFunction = None
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
        self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._dependency_resolver.put('service', Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')
        self._service = self._dependency_resolver.get_one_required('service')

```