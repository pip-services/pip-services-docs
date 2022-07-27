
```dart
import 'dart:async';

import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

class MyRestService extends RestService {
  MyRestService() : super() {
    baseRoute = '/my_service';
  }

  FutureOr<Response> myPage(Request req) async {
    var name = req.url.queryParameters['message'];
    var message = req.params['name'];
    var result = message.toString() + ', ' + name.toString();

    return sendResult(req, result);
  }

  @override
  void register() {
    registerRoute('GET', '/my_page/<name>', null, myPage);
  }
}

void main(List<String> arguments) async {
  var myRestService = MyRestService();

  myRestService.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    15239
  ]));
  await myRestService.open('123');
}

```
