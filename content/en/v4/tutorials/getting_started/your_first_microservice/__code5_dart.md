
```dart
class HelloWorldRestService extends rpc.RestService
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```dart
  @override
  void register() {
    registerRoute('get', '/greeting', null, (Request req) async {
      var name = req.url.queryParameters['name'];
      return sendResult(req, await controller!.greeting(name));
    });
  }
```

To get a reference to the service, we'll add its descriptor to the _dependency_resolver with a name of "service".

```dart
  HelloWorldRestService() : super() {
    baseRoute = '/hello_world';
    dependencyResolver.put(
        'controller', Descriptor('hello-world', 'controller', '*', '*', '1.0'));
  }

```

