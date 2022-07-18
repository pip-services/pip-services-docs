
```ts
import { ConfigParams, References } from "pip-services3-commons-nodex";

let service = new MyGrpcService();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

service.setReferences(new References());

```
