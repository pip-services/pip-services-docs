
```ts
import { RedisLock  } from "pip-services4-redis-node";
import { ConfigParams } from 'pip-services4-components-node';

let lock = new RedisLock();
lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));

await lock.open(ctx);
await lock.acquireLock(ctx, "key1", 3000, 1000);

try {
    // Processing...
} finally {
    await lock.releaseLock(ctx, "key1");
}
```
