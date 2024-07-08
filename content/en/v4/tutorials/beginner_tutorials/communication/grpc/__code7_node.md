
```ts
import { ConfigParams, References } from "pip-services4-components-nodes";

let controller = new MyGrpcController();
controller.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

controller.setReferences(new References());


```
