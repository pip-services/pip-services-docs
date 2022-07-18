
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_prometheus/pip_services3_prometheus.dart';


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
