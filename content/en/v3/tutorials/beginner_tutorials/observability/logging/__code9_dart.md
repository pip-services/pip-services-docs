
```dart
import 'package:pip_services3_elasticsearch/pip_services3_elasticsearch.dart';

var logger = ElasticSearchLogger();
logger.configure(ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  9200
]));

logger.setLevel(LogLevel.Debug);

await logger.open("123");

logger.info('123', 'My message');

```
