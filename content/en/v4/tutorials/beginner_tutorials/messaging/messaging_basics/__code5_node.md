
```ts
import { MessageEnvelope } from "pip-services4-messaging-node";

await messageQueue.send(ctx, new MessageEnvelope(null, "mymessage", "ABC"));
```
