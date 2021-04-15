---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

TODO: add description

### Constructors
Creates an instance of the CallbackMessageReceiver.

> new constructor(callback: function): [CallbackMessageReceiver]()

- **callback**: function a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Methods

#### receiveMessage
Receives incoming message from the queue.  
See [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue), callback: function): void

- **envelope**: [MessageEnvelope](../message_envelope) an incoming message
- **queue**: [IMessageQueue](../imessage_queue) a queue where the message comes from
- **callback**: function callback function that receives error or null for success.
