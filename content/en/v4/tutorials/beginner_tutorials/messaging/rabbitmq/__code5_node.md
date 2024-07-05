
```ts
import { MessageEnvelope } from 'pip-services4-messaging-node';

await queue.send(ctx, new MessageEnvelope(null, "mymessage", "ABC"));
```
