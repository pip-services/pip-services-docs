
```ts
import { ConfigParams } from "pip-services3-commons-nodex";

let myRestService = new MyRestService();

myRestService.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15239
));
await myRestService.open("123");

```
