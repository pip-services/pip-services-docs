
```dart
var config = ConfigParams.fromTuples(['password', 'password5']);
var overriden = credential.override(config);

// Returns
// {'username': 'user1',
// 'password': 'password5',
// 'store_key': 'store key1',
// 'access_key': 'access key 1',
// 'access_id': 'access id 1',
// 'parameter_name': 'new_parameter_value'}
```
