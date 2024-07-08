
```ts
import { ConfigParams } from "pip-services4-components-node";
import { ConnectionUtils } from "pip-services4-config-node";

let options = ConfigParams.fromTuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", null
);

let uri = ConnectionUtils.composeUri(options, "tcp", 9092);
```
