
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';


class MyRestService extends RestService {
  MyRestService() {
    baseRoute = '/my_service';
  }

  // GET
  FutureOr<Response> _myPageGet(Request req) async {
    var result =
        req.url.queryParameters['message']! + ', ' + req.params['name']!;

    return await sendResult(req, result);
  }

  // HEAD
  FutureOr<Response> _myPageHead(Request req) async {
    return await sendResult(req, null);
  }

  // POST
  FutureOr<Response> _myPagePost(Request req) async {
    var data = json.decode(await req.readAsString());
    var result = req.url.queryParameters['message']! +
        ', ' +
        req.params['name']! +
        ', ' +
        'data:' +
        data['data1'];

    return await sendResult(req, result);
  }

  // PUT
  FutureOr<Response> _myPagePut(Request req) async {
    var data = json.decode(await req.readAsString());
    var result = req.url.queryParameters['message']! +
        ', ' +
        req.params['name']! +
        ', ' +
        'data:' +
        data['data1'];

    return await sendResult(req, result);
  }

  // Route registration
  @override
  void register() {
    registerRoute('get', '/my_page/<name>', null, _myPageGet);
    registerRoute('head', '/my_page/<name>', null, _myPageHead);
    registerRoute('post', '/my_page/<name>', null, _myPagePost);
    registerRoute('put', '/my_page/<name>', null, _myPagePut);
  }
}


// Instantiation
var myRestService = MyRestService();

// REST service configuration
myRestService.configure(ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  15235
]));

// Connection
await myRestService.open('123');

```
