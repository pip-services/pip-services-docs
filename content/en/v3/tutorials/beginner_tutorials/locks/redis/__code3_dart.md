
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_redis/pip_services3_redis.dart';

var cache = RedisCache();
cache.configure(ConfigParams.fromTuples(
    ['connection.host', 'localhost', 'connection.port', 6379]));
```
