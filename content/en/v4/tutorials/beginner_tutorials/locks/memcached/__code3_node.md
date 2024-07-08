
```ts
import { ConfigParams } from "pip-services4-components-node";
import { MemcachedCache } from "pip-services4-memcached-node";

let cache = new MemcachedCache();

cache.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));
```
