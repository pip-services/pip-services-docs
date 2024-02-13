
```dart
var database2 = MyIdentifiablePostgresPersistence();
database2.configure(ConfigParams.fromTuples([
  'connection.host',
  host,
  'connection.port',
  port,
  'connection.database',
  db_name,
  'credential.username',
  user,
  'credential.password',
  password
]));
```
