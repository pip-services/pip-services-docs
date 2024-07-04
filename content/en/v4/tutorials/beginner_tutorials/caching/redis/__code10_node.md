
```ts
import { RedisLock  } from "pip-services4-redis-node";
import { ConfigParams } from 'pip-services4-components-node';

let lock = new RedisLock();
lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));
```
