
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';

let lock = new RedisLock();
lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));

```
