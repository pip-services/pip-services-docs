
```ts
import { ConfigParams } from "pip-services3-commons-nodex";

let lock = new MemcachedLock();

lock.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));

```
