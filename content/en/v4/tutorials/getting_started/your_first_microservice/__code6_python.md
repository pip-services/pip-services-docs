
**/HelloWorldRestService.py**
```python
class HelloWorldRestService(RestService):

    def __init__(self):
        super(HelloWorldRestService, self).__init__()
        self._base_route = "/hello_word"
        ControllerDescriptor = Descriptor('hello-world', 'controller', '*', '*', '1.0')
        self._dependency_resolver.put('controller', ControllerDescriptor)

    def set_references(self, references):
        super(HelloWorldRestService, self).set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')

    def register(self):
        self.register_route(method="GET", route=self._route, handler=self.greeting, schema=None)

    def greeting(self, name):
        result = self._controller.greeting(name)
        self.send_result(result)
```

