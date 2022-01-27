
```dart
import 'package:pip_services3_aws/pip_services3_aws.dart';

var logger = CloudWatchLogger();

logger.configure(ConfigParams.fromTuples([
  'stream',
  'mystream',
  'group',
  'mygroup',
  'connection.region',
  'us-east-1',
  'connection.access_id',
  'XXXXXXXXXXX',
  'connection.access_key',
  'XXXXXXXXXXX'
]));

logger.setLevel(LogLevel.Debug);
await logger.open('123');
logger.info('123', 'My message');

```
