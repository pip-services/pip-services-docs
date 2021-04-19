---
type: docs
title: "Queues"
linkTitle: "Queues"
no_list: true
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    TODO: add description
---
---

<div class="module-body"> 

### Interfaces

#### [IMessageQueue](imessage_queue)
Interface for asynchronous message queues.
Not all queues may implement all the methods.
Attempt to call non-supported method will result in NotImplemented exception.
To verify if specific method is supported consult with [MessagingCapabilities](messaging_capabilities).

#### [IMessageReceive](imessage_receive)
Callback interface to receive incoming messages.

<br>

### Classes

#### [CallbackMessageReceiver](callback_message_receiver)
TODO: add description

#### [LockedMessage](locked_message)
Data object used to store and lock incoming messages in [MemoryMessageQueue](memory_message_queue).

#### [MemoryMessageQueue](memory_message_queue)
Message queue that sends and receives messages within the same process by using shared memory.  
This queue is typically used for testing to mock real queues.

#### [MessageEnvelope](message_envelope)
Allows adding additional information to messages. A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
Side note: a MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

#### [MessageQueue](message_queue)
Abstract message queue that is used as a basis for specific message queue implementations.

#### [MessagingCapabilities](messaging_capabilities)
Data object that contains supported capabilities of a message queue. If certain capability is not supported a queue will 
throw NotImplemented exception.

</div>