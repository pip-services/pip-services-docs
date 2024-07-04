
```ts
import { RedisCache } from "pip-services4-redis-node";
import { ConfigParams } from 'pip-services4-components-node';

let cache = new RedisCache();
cache.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));
```
