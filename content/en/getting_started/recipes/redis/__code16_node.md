
```ts
import { RedisLock } from 'pip-services3-redis-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';

let lock = new RedisLock();
lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));

await lock.open(null);
await lock.acquireLock(null, "key1", 3000, 1000);

try {
    // Processing...
} finally {
    await lock.releaseLock(null, "key1");
}
```
