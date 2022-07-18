---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
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
import time
from threading import Thread

from pip_services3_messaging.queues import IMessageReceiver, MemoryMessageQueue, MessageEnvelope


class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print("Received message: " + envelop.get_message_as_string())


messageQueue = MemoryMessageQueue()
messageQueue.open("123")

Thread(target=messageQueue.listen, args=("123", MyMessageReceiver()), daemon=True).start()

messageQueue.send("123", MessageEnvelope(None, "mymessage", "ABC"))  # Output in console: "ABC"

time.sleep(0.1)  # wait message

messageQueue.close('123')
```
