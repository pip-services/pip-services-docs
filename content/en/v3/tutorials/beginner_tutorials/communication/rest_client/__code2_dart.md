
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

class MyRestClient extends RestClient {
  MyRestClient() {
    baseRoute = '/my_service';
  }

  // GET
  Future<String> getDataGet(String? correlationId, String name) async {
    return await call(
        'get', '/my_page/' + name, correlationId, {'message': 'Hello'}, null);
  }

  // HEAD
  Future<String> getDataHead(String? correlationId, String name) async {
    var res = await call(
        'head', '/my_page/' + name, correlationId, {'message': 'Hello'}, null);
    return res ?? '';
  }

  // POST
  Future<String> getDataPost(String? correlationId, String name) async {
    return await call('post', '/my_page/' + name, correlationId,
        {'message': 'Hello'}, {'data1': 'my data'});
  }

  // PUT
  Future<String> getDataPut(String? correlationId, String name) async {
    return await call('put', '/my_page/' + name, correlationId,
        {'message': 'Hello'}, {'data1': 'my data'});
  }
}
        
// Instantiation
var client = MyRestClient();

// REST client configuration
client.configure(ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  15235
]));

// Connection
await client.open('123');
```
