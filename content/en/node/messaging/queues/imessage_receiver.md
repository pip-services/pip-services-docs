---
type: docs
title: "IMessageReceive"
linkTitle: "IMessageReceive"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
  Callback interface to receive incoming messages.
---


**Example:**

```typescript
class MyMessageReceiver implements IMessageReceiver {
  public async receiveMessage(envelop: MessageEnvelop, queue: IMessageQueue): Promise<void> {
      console.log("Received message: " + envelop.getMessageAsString());
  }
}
let messageQueue = new MemoryMessageQueue();
messageQueue.listen("123", new MyMessageReceiver());
await messageQueue.open("123")
await messageQueue.send("123", new MessageEnvelop(null, "mymessage", "ABC")); // Output in console: "ABC"

```

### Methods

#### receiveMessage
Receives incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from
