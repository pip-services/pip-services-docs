
```dart
var credential1 = CredentialParams(ConfigParams.fromTuples(
    ['user', 'jdoe3V2', 'password', 'pass123345', 'pin', '321345']));
await credentialStore.store(null, 'key3', credential1);
```
