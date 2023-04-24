
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { ConnectionParams } from "pip-services3-components-nodex";

let config = ConfigParams.fromTuples("protocol", "http34343", "host", "host123", "uri", "uri321");
let connection = new ConnectionParams(config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
