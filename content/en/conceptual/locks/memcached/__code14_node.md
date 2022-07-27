
```ts
import { MemcachedLock } from "pip-services-memcached-nodex";
import { ConfigParams } from "pip-services3-commons-nodex";

export async function main() {

    var lock = new MemcachedLock();

    lock.configure(ConfigParams.fromTuples(
        "connection.host", "localhost",
        "connection.port", 11211
    ));

    await lock.open("123");
    await lock.acquireLock("123", "key1", 3000, 1000);

    try {
        // Processing...
    }
    finally {
        await lock.releaseLock("123", "key1");
    }

    await lock.close("123");
}

```
