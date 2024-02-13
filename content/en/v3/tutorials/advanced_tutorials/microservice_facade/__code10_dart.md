**/test/fixture/TestRestClient.dart**

```dart
import 'dart:convert';

import 'package:http/http.dart' as http;

class TestRestClient {
  final _rest = http.Client();
  var baseUrl = 'http://localhost:3000';

  TestRestClient([String? baseUrl]) {
    baseUrl = baseUrl ?? 'http://localhost:3000';
  }

  Future get(String path) async {
    return await _rest.get(Uri.parse(baseUrl + path));
  }

  Future head(String path) async {
    return await _rest.head(Uri.parse(baseUrl + path));
  }

  Future post(String path, dynamic params) async {
    return await _rest.post(Uri.parse(baseUrl + path),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(params));
  }

  Future put(String path, dynamic params) async {
    return await _rest.put(Uri.parse(baseUrl + path),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(params));
  }

  Future del(String path) async {
    return await _rest.delete(Uri.parse(baseUrl + path));
  }

  Future getAsUser(String sessionId, String path) async {
    return await _rest
        .get(Uri.parse(baseUrl + path), headers: {'x-session-id': sessionId});
  }

  Future headAsUser(String sessionId, String path) async {
    return await _rest
        .head(Uri.parse(baseUrl + path), headers: {'x-session-id': sessionId});
  }

  Future postAsUser(String sessionId, String path, dynamic params) async {
    return await _rest.post(Uri.parse(baseUrl + path),
        headers: {
          'x-session-id': sessionId,
          'Content-Type': 'application/json'
        },
        body: jsonEncode(params));
  }

  Future putAsUser(String sessionId, String path, dynamic params) async {
    return await _rest.put(Uri.parse(baseUrl + path),
        headers: {
          'x-session-id': sessionId,
          'Content-Type': 'application/json'
        },
        body: jsonEncode(params));
  }

  Future delAsUser(String sessionId, String path) async {
    return await _rest.delete(Uri.parse(baseUrl + path),
        headers: {'x-session-id': sessionId});
  }
}

```

