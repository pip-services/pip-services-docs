
```ts
import { MessageEnvelope } from "pip-services4-messaging-node";

await queue.send(null, new MessageEnvelope(null, "mymessage", "ABC123"));
```
