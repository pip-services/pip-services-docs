
```ts
import { IMessageQueue, IMessageReceiver, MessageEnvelope } from "pip-services4-messaging-node";

export class MyMessageReceiver implements IMessageReceiver {
    public async receiveMessage(envelope: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        console.log("Received message: " + envelope.getMessageAsString());
    }
}
```
