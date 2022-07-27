
```dart
import 'dart:async';
import 'dart:convert';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

void main(List<String> argument) async {
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

  // Using the different HTTP methods
  // GET
  print('GET: ' + await client.getDataGet('123', 'David'));
  // HEAD
  print('HEAD: ' + await client.getDataHead('123', 'David'));
  // POST
  print('POST: ' + await client.getDataPost('123', 'David'));
  // PUT
  print('PUT: ' + await client.getDataPut('123', 'David'));

  // Close REST service and REST client
  await client.close('123');
  await myRestService.close('123');
}

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

```
