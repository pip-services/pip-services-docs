
```ts
import { ConfigParams, IContext } from "pip-services4-components-node";
import { MemcachedLock } from "pip-services4-memcached-node";

let lock = new MemcachedLock();

lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));
```
