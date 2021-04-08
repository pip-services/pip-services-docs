---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

### Constructors

> new CallbackMessageReceiver(callback: function): [CallbackMessageReceiver]()

Creates an instance of the CallbackMessageReceiver.

- callback: function a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)
    - (envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue), callback: function): void

### Methods

#### receiveMessage
> receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue), callback: function): void

Receives incoming message from the queue.

- envelope: [MessageEnvelope](../message_envelope) an incoming message

- queue: [IMessageQueue](../imessage_queue) a queue where the message comes from

- callback: function callback function that receives error or null for success.
    - (err: any): void
        - err: any

See [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)