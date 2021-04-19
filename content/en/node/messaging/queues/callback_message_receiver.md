---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    TODO: add description
---

### Constructors
Creates an instance of the CallbackMessageReceiver.

> constructor(callback: (envelope: MessageEnvelope, queue: [IMessageQueue](../imessage_queue), callback: (err: any) => void) => void): [CallbackMessageReceiver]()

- **callback**: (envelope: MessageEnvelope, queue: [IMessageQueue](../imessage_queue), callback: (err: any) => void) -  a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)
- **returns**: [CallbackMessageReceiver]() - TODO: add description

### Methods

#### receiveMessage
Receives incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue), callback: (err: any) => void): void

- **envelope**: [MessageEnvelope](../message_envelope) - an incoming message
- **queue**: [IMessageQueue](../imessage_queue) - a queue where the message comes from
- **callback**: (err: any) => void - callback function that receives error or null for success.
