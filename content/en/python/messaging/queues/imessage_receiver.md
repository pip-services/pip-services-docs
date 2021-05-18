---
type: docs
title: "IMessageReceive"
linkTitle: "IMessageReceive"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Instance methods

#### receive_message
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receive_message(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue))

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```python
class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print "Received message: " + envelop.get_message_as_string()

messageQueue = MemoryMessageQueue()
messageQueue.listen("123", MyMessageReceiver())

messageQueue.open("123")
messageQueue.send("123", MessageEnvelope(None, "mymessage", "ABC")) # Output in console: "ABC"
```
