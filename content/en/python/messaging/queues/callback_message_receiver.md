---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Wraps message callback into [IMessageReceiver](../imessage_receiver)
---

**Implements:** [IMessageReceiver](../imessage_receiver)


### Constructors
Creates an instance of the CallbackMessageReceiver.

> CallbackMessageReceiver(callback: Callable[[[MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)], None])
    

- **callback**: Callable[[[MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)], None] - a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Methods

#### receive_message
Receives incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receive_message(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue))

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from