
```python
class MyCloudService(CloudFunctionService):
    def __init__(self):
        super().__init__('mygroup')
        self._dependency_resolver.put('controller',
                                      Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))

        self._controller: MyController = None
        self._headers = {
            'Content-Type': 'application/json'
        }

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')

    def register(self):
        def handler(req: flask.Request):
            name = 'default name'
            if req.is_json:
                name = req.json.get('name', name)
            res = self._controller.greeting(name)
            return res, 200

        self._register_action(
            'greetings',
            ObjectSchema(True).with_required_property("body",
                                                      ObjectSchema().with_required_property("name", TypeCode.String)),
            handler
        )

```