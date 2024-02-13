
```ts
import { MessageEnvelope } from "pip-services3-messaging-nodex";

await messageQueue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));
```
