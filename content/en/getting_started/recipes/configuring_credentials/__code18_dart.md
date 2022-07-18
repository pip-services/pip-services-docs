
```dart
var credential = CredentialParams(ConfigParams.fromTuples(
    ['user', 'jdoe3', 'password', 'pass123345', 'pin', '321345']));
    
await credentialStore.store(null, 'key2', credential);
}

```
