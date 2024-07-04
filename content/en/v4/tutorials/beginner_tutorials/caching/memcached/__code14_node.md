
```ts
import { ConfigParams, IContext } from "pip-services4-components-node";
import { MemcachedLock } from "pip-services4-memcached-node";

export async function main() {

  var lock = new MemcachedLock();

  lock.configure(ConfigParams.fromTuples(
      "connection.host", "localhost",
      "connection.port", 11211
  ));

  // ...

  await lock.open(ctx);
  await lock.acquireLock(ctx, "key1", 3000, 1000);

  try {
      // Processing...
  }
  finally {
      await lock.releaseLock(ctx, "key1");
  }

  await lock.close(ctx);
}
```
