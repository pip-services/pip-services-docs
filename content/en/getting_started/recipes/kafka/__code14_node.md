
```ts
import { MessageEnvelope } from "pip-services3-messaging-nodex";

await queue.send(null, new MessageEnvelope(null, 'mymessage', 'ABC'));
```
