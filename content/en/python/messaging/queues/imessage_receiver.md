---
type: docs
title: "IMessageReceive"
linkTitle: "IMessageReceive"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
  Callback interface to receive incoming messages.
---


**Example:**

```python
class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print "Received message: " + envelop.get_message_as_string()

messageQueue = MemoryMessageQueue()
messageQueue.listen("123", MyMessageReceiver())

messageQueue.open("123")
messageQueue.send("123", MessageEnvelope(None, "mymessage", "ABC")) # Output in console: "ABC"

```

### Methods

#### receive_message
Receives incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receive_message(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue))

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from
