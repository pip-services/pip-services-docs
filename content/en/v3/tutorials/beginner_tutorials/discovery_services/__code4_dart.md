
```dart
await discovery.register('123', 'key3', ConnectionParams.fromTuples([
  'host', 'localhost',
  'port', '8000'
])); // Returns {"host": "localhost", "port": "8000"}

```
