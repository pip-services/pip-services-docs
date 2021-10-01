
```dart
abstract class IConfigReader {
  Future<ConfigParams> readConfig(String correlationId, ConfigParams parameters);
}

```

