
**/test/operations/version1/SessionsRoutesV1_test.dart**

```dart
import 'dart:convert';

import 'package:pip_services_sessions/pip_services_sessions.dart';
import 'package:test/test.dart';

import '../../fixtures/TestReferences.dart';
import '../../fixtures/TestRestClient.dart';

void main() {
  group('SessionRoutesV1', () {
    late TestReferences references;
    late TestRestClient rest;

    var USER = {
      'login': 'test',
      'name': 'Test User',
      'email': 'test@conceptual.vision',
      'password': 'test123'
    };

    setUp(() async {
      rest = TestRestClient();
      references = TestReferences();
      await references.open(null);
    });

    tearDown(() async {
      await references.close(null);
    });

    test('should signup new user', () async {
      var response = await rest.post('/api/v1/users/signup', USER);

      var session = SessionV1();
      session.fromJson(jsonDecode(response.body));

      expect(session.id, isNotNull);
      expect(session.user_name, USER['name']);
    });

    test('should not signup with the same email', () async {
      // Sign up
      var response = await rest.post('/api/v1/users/signup', USER);

      var session = SessionV1();
      session.fromJson(jsonDecode(response.body));

      expect(session.id, isNotNull);
      expect(session.user_name, USER['name']);

      // Try to sign up again
      response = await rest.post('/api/v1/users/signup', USER);

      expect(response.statusCode >= 400, isTrue);
    });

    test('should signout', () async {
      // Sign out
      var response = await rest.post('/api/v1/users/signout', null);

      expect(response.statusCode < 400, isTrue);
    });

    test('should signin with email and password', () async {
      // Sign up
      var response = await rest.post('/api/v1/users/signup', USER);

      expect(response.statusCode < 400, isTrue);

      // Sign in with username
      response = await rest.post(
        '/api/v1/users/signin',
        {'login': USER['login'], 'password': USER['password']},
      );

      expect(response.statusCode < 400, isTrue);
    });
  });
}
```

