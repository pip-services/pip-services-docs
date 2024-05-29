
```python
class HelloWorldRestService(RestService):
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```python
def register(self):
    self.register_route(method="GET", route=self._route, handler=self.greeting)


def greeting(self, name):
    result = Parameters.from_tuples("name", self._controller.greeting(name))

    self.send_result(result)

```

To get a reference to the service, we'll add its descriptor to the _dependency_resolver with a name of "service".

```python
def __init__(self):
    super(HelloWorldRestService, self).__init__()
    self._base_route = "/hello_world"
    ControllerDescriptor = Descriptor('hello-world', 'controller', '*', '*', '1.0')
    self._dependency_resolver.put('controller', ControllerDescriptor)

```
