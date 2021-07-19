---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> Future receiveMessage([MessageEnvelope](../message_envelope) envelope, [IMessageQueue](../imessage_queue) queue)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```dart
class MyMessageReceiver implements IMessageReceiver {
  Future receiveMessage(MessageEnvelop envelope, IMessageQueue queue) async {
      print("Received message: " + envelop.getMessageAsString());
  }
}

var messageQueue =  MemoryMessageQueue();
messageQueue.listen("123", MyMessageReceiver());
await messageQueue.open("123")
messageQueue.send("123", MessageEnvelop(null, "mymessage", "ABC")); // Output in console: "ABC"
```
