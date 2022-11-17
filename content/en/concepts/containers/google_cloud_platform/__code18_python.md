
```python
# Controller's and service’s descriptors are defined in the configuration file
class MyCloudFunction(CloudFunction):
    def __init__(self):
        super().__init__("mygroup", "Mygroup service")
        self._controller: MyController = None
        self._service: CloudFunctionService = None
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._service = references.get_one_required(Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))
```