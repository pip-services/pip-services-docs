
```dart
// Case 1: Constructor + ConfigParams object
var config = ConfigParams.fromTuples(['user', 'user1', 'password', 'password1']);
var credential = CredentialParams(config); // Returns {'credential.user': 'user1', 'credential.password': 'password1'}

// Case 2: Constructor + set/put methods
credential.setUsername('user1');
credential.setPassword('password1');
credential.setStoreKey('store key1');
credential.setAccessKey('access key 1');
credential.setAccessId('access id 1');
credential.put('parameter1', 'value1');
credential
// Returns
//{'username': 'user1',
// 'password': 'password1',
// 'store_key': 'store key1',
// 'access_key': 'access key 1',
// 'access_id': 'access id 1'
// 'parameter1': 'value1'}
```
