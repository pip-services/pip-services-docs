
**/HelloWorldRestController.py**
```python
class HelloWorldRestController(RestController):

    def __init__(self):
        super(HelloWorldRestController, self).__init__()
        self._route = "/hello_word"
        SeriveDescriptor = Descriptor('hello-world', 'service', '*', '*', '1.0')
        self._dependency_resolver.put('controller', ControllerDescriptor)

    def set_references(self, references):
        super(HelloWorldRestController, self).set_references(references)
        self._servicer = self._dependency_resolver.get_one_required('service')

    def register(self):
        self.register_route(method="GET", route=self._route, handler=self.greeting, schema=None)

    def greeting(self, name):
        result = self._service.greeting(name)
        self.send_result(result)
```

