
```ts
import { ConfigParams } from "pip-services4-components-node";
import { KafkaConnection } from "pip-services4-kafka-node";

let kc = new KafkaConnection();
let config = ConfigParams.fromTuples(
    'connection.host', 'localhost',
    'connection.port', 9092
);

kc.configure(config);

await kc.open(null);
```
