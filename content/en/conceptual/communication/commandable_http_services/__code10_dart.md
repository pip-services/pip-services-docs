
```dart
var client = MyCommandableHttpClient('commandable_hello_friend');
client.configure(ConfigParams.fromTuples([
  'connection.protocol', 'http',
  'connection.host', 'localhost',
  'connection.port', 8080
]));

await client.open(null);
```
