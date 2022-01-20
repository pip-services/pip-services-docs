
```cs
import { ConfigParams, References } from "pip-services3-commons-nodex";

let client = new MyGrpcClient();
client.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 50055
));

client.setReferences(new References());
```
