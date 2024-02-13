---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-messaging-node"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```typescript
import { IMessageQueue, IMessageReceiver, MemoryMessageQueue, MessageEnvelope } from "pip-services3-messaging-nodex";

export async function main() {
   
    let messageQueue = new MemoryMessageQueue();
    messageQueue.listen("123", new MyMessageReceiver());

    await messageQueue.open("123")
    await messageQueue.send("123", new MessageEnvelope(null, "mymessage", "ABC")); // Output in console: "ABC"
}

class MyMessageReceiver implements IMessageReceiver {
    public async receiveMessage(envelop: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        console.log("Received message: " + envelop.getMessageAsString());
    }
}

```
