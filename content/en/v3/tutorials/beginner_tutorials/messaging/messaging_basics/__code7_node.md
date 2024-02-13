
```ts
import { IMessageQueue, IMessageReceiver, MemoryMessageQueue, MessageEnvelope } from "pip-services3-messaging-nodex";

export async function main() {
    // Message queue
    let messageQueue = new MemoryMessageQueue();
    await messageQueue.open("123");

    // Listener
    new Promise(() => messageQueue.listen("123", new MyMessageReceiver()));
    
    // Send message
    await messageQueue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));

    // Close message queue
    await messageQueue.close('123');
}

// Message receiver
export class MyMessageReceiver implements IMessageReceiver {
    public async receiveMessage(envelope: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        console.log("Received message: " + envelope.getMessageAsString());
    }
}

```
