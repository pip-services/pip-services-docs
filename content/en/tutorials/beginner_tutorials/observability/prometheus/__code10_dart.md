
```dart
var service = PrometheusMetricsService();

service.configure(ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  8080
]));
```
