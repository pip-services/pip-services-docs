
```ts
import { ConfigParams, References } from "pip-services4-components-node";

let client = new MyGrpcClient();
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

client.setReferences(new References());
```
