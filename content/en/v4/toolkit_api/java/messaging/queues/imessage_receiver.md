---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> void receiveMessage([MessageEnvelope](../message_envelope) envelop, [IMessageQueue](../imessage_queue) queue)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```java
class MyMessageReceiver implements IMessageReceiver {
    public void receiveMessage(MessageEnvelope envelop, IMessageQueue queue) {
        System.out.println("Received message: " + envelop.getMessageAsString());
        ...
    }
  }
  
  MemoryMessageQueue messageQueue = new MemoryMessageQueue();
  messageQueue.listen("123", new MyMessageReceiver());
  
  messageQueue.open("123");
  messageQueue.send("123", new MessageEnvelope(null, "mymessage", "ABC")); // Output in console: "ABC"
  }

```
