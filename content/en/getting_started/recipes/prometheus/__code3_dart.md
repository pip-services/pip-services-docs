
```dart
import 'package:pip_services3_prometheus/pip_services3_prometheus.dart';

var counters = PrometheusCounters();

counters.configure(ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  8080
]));

await counters.open(null);

var mycomponent = MyComponentA(counters);
```