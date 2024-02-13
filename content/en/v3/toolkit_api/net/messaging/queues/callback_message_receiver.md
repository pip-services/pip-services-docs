---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Wraps a message callback into [IMessageReceiver](../imessage_receiver)
---

**Inherits:** [IMessageReceiver](../imessage_receiver)

### Description

The CallbackMessageReceiver class allows you to wrap message callbacks into [IMessageReceiver](../imessage_receiver). 

### Constructors
Creates an instance of the CallbackMessageReceiver.

> `public` CallbackMessageReceiver(Func\<[MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue), Task\> callback)
    

- **callback**: Func\<[MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue), Task\> - callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> `public` Task ReceiveMessageAsync([MessageEnvelope](../message_envelope) envelope, [IMessageQueue](../imessage_queue) queue)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from
