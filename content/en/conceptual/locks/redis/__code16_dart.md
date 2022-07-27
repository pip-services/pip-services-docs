
```ts
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_redis/pip_services3_redis.dart';

var lock = RedisLock();
lock.configure(ConfigParams.fromTuples(
  ['connection.host', 'localhost', 'connection.port', 6379]));

await lock.open(null);
await lock.acquireLock(null, 'key1', 3000, 1000);

try {
  // Processing...
} finally {
  await lock.releaseLock(null, 'key1');
}
```
