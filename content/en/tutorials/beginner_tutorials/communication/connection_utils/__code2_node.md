
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { ConnectionUtils } from "pip-services3-components-nodex";

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
