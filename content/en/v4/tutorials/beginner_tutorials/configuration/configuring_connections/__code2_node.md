
```ts
import { ConnectionParams } from "pip-services4-config-node"
import { ConfigParams } from "pip-services4-components-node"

let config = ConfigParams.fromTuples("protocol", "http34343", "host", "host123", "uri", "uri321");
let connection = new ConnectionParams(config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
