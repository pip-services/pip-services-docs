
```ts
import { ConfigParams } from "pip-services4-components-node";

queue.configure(ConfigParams.fromTuples(
    "exchange", "myqueue", // rabbitmq exchange type
    "queue", "myqueue", // queue name
    "options.auto_create", true, // autocreate queue
    "connection.host", "localhost",
    "connection.port", 5672
    // if need credentials
    //"credential.username", "user",
    //"credential.password", "pass123"
));
```
