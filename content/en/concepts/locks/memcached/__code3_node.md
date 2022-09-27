
```ts
import { ConfigParams } from "pip-services3-commons-nodex";

let cache = new MemcachedCache();

cache.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));

```
