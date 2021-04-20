---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Wraps message callback into IMessageReceiver
---

### Constructors
Creates an instance of the CallbackMessageReceiver.

> `public` constructor(callback: (envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)) => Promise\<void\>) 

- **callback**: a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Methods

#### receiveMessage
Receives incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> `public` async receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from