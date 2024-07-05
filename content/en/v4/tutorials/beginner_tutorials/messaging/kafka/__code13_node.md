
```ts

import { ConfigParams } from "pip-services4-components-node";
import { KafkaMessageQueue } from "pip-services4-kafka-node";

let queue = new KafkaMessageQueue();
queue.configure(ConfigParams.fromTuples(
    "topic", "mytopic",
    'connection.protocol', 'tcp',
    "connection.host", "localhost",
    "connection.port", 9092,
    "options.autosubscribe", true
));

await queue.open(null);
```
