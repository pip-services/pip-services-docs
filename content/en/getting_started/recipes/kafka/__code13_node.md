
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { KafkaMessageQueue } from "pip-services3-kafka-nodex";

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
