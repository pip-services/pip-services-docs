---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Wraps message callback into [IMessageReceiver](../imessage_receiver)
---

**Implements:** [IMessageReceiver](../imessage_receiver)


### Constructors
Creates an instance of the CallbackMessageReceiver.

> `public` constructor(callback: (envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)) => Promise\<void\>) 

- **callback**: a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Methods

#### receiveMessage
Receives incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> `public` receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from