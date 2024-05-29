
**/lib/src/HelloWorldRestService.dart**
```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:shelf/shelf.dart';
import './HelloWorldController.dart';

class HelloWorldRestService extends RestService {
  HelloWorldController? controller;

  HelloWorldRestService() : super() {
    baseRoute = '/hello_world';
    dependencyResolver.put(
        'controller', Descriptor('hello-world', 'controller', '*', '*', '1.0'));
  }

  @override
  void setReferences(references) {
    super.setReferences(references);
    controller =
        dependencyResolver.getOneRequired<HelloWorldController>('controller');
  }

  @override
  void register() {
    registerRoute('get', '/greeting', null, (Request req) async {
      var name = req.url.queryParameters['name'];
      return sendResult(req, await controller!.greeting(name));
    });
  }
}

```
