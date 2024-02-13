
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { KafkaConnection } from "pip-services3-kafka-nodex";

let kc = new KafkaConnection();
let config = ConfigParams.fromTuples(
    'connection.host', 'localhost',
    'connection.port', 9092
);

kc.configure(config);

await kc.open(null);
```
