
```dart
import 'dart:async';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

class HelloFriendRestService extends RestService {
  HelloFriendController? _controller;

  String? _swaggerContent;
  String? _swaggerPath;

  HelloFriendRestService() : super() {
    baseRoute = '/hello_friend';

    var controllerDescriptor =
        Descriptor('hello-friend', 'controller', '*', '*', '1.0');
    dependencyResolver.put('controller', controllerDescriptor);
  }

  @override
  void configure(ConfigParams config) {
    super.configure(config);

    // swagger
    _swaggerContent = config.getAsNullableString("swagger.content");
    _swaggerPath = config.getAsNullableString("swagger.path");
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _controller =
        dependencyResolver.getOneRequired<HelloFriendController>('controller');
  }

  @override
  void register() {
    registerRoute('get', '/greeting', null, _greeting);

    // swagger
    if (_swaggerContent != null) {
      registerOpenApiSpec_(_swaggerContent!);
    }

    if (_swaggerPath != null) {
      registerOpenApiSpecFromFile(_swaggerPath!);
    }
  }

  FutureOr<Response> _greeting(Request req) {
    var name = req.params['name'];
    var result = _controller!.greeting(name);

    return sendResult(req, result);
  }
}

```
