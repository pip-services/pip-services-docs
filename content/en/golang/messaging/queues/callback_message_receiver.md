---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-messaging-go"
description: >
    Wraps a message callback into [IMessageReceiver](../imessage_receiver)
---

### Description

The CallbackMessageReceiver class allows you to wrap message callbacks into [IMessageReceiver](../imessage_receiver). 

### Constructors

#### NewCallbackMessageReceiver
Creates an instance of the CallbackMessageReceiver.

> NewCallbackMessageReceiver(callback func(message [*MessageEnvelope](../message_envelope), queue [IMessageQueue](../imessage_queue)) error) [*CallbackMessageReceiver]()
    

- **callback**: func(message [*MessageEnvelope](../message_envelope), queue [IMessageQueue](../imessage_queue)) - a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Methods

#### ReceiveMessage
Receives an incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> (c [*CallbackMessageReceiver]()) ReceiveMessage(message [*MessageEnvelope](../message_envelope), queue [IMessageQueue](../imessage_queue)) (err error)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message.
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from.
- **returns**: error - returns error if not received.
