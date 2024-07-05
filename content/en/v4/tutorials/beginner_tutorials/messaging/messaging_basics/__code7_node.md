
```ts
import { IMessageQueue, IMessageReceiver, MemoryMessageQueue, MessageEnvelope } from "pip-services4-messaging-node";

export async function main() {
    // Message queue
    let messageQueue = new MemoryMessageQueue();
    await messageQueue.open(ctx);

    // Listener
    new Promise(() => messageQueue.listen(ctx, new MyMessageReceiver()));
    
    // Send message
    await messageQueue.send(ctx, new MessageEnvelope(null, "mymessage", "ABC"));

    // Close message queue
    await messageQueue.close(ctx);
}

// Message receiver
export class MyMessageReceiver implements IMessageReceiver {
    public async receiveMessage(envelope: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        console.log("Received message: " + envelope.getMessageAsString());
    }
}
```
