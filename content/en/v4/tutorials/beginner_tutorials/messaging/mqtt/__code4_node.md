
```ts
import { ConfigParams } from "pip-services4-components-node";

queue.configure(ConfigParams.fromTuples(
    "topic", "mytopic",                 // set topic
    "connection.protocol", "mqtt",
    "connection.host", "localhost",
    "connection.port", 1883,
    "options.qos", "1",                 // sets the qos level to "At least once"
    "options.autosubscribe", true,      // autosubscription on the topic
    "options.serialize_envelope", true  // converts object into mosquitto values 
));

```
