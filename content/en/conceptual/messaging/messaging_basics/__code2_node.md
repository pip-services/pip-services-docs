
```ts
import { IMessageQueue } from "pip-services3-messaging-nodex";

export class MyMessageReceiver implements IMessageReceiver {
    public async receiveMessage(envelope: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        console.log("Received message: " + envelope.getMessageAsString());
    }
}
```
