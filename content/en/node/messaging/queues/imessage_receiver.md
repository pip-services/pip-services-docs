---
type: docs
title: "IMessageReceive"
linkTitle: "IMessageReceive"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Callback interface to receive incoming messages.

**Example:**

```typescript
class MyMessageReceiver implements IMessageReceiver {
  public receiveMessage(envelop: MessageEnvelop, queue: IMessageQueue, callback) {
      console.log("Received message: " + envelop.getMessageAsString());
  }
}

let messageQueue = new MemoryMessageQueue();
messageQueue.listen("123", new MyMessageReceiver());

messageQueue.open("123", (err) => {
   messageQueue.send("123", new MessageEnvelop(null, "mymessage", "ABC")); // Output in console: "ABC"
});

```

### Methods

#### receiveMessage
> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue), callback: function): void

Receives incoming message from the queue.

- envelope: [MessageEnvelope](../message_envelope) an incoming message
- queue: [IMessageQueue](../imessage_queue) a queue where the message comes from
- callback: callback function that receives error or null for success.
    - (err: any): void
        - err: any

See [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

