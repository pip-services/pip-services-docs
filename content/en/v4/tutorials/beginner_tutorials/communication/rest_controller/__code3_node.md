
```ts
import { ConfigParams } from "pip-services4-components-node";

let myRestService = new MyRestController();

myRestService.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15239
));
await myRestService.open(ctx);
```
