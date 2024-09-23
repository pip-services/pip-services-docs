---
type: docs
title: "Queues"
linkTitle: "Queues"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    This package contains interfaces and classes used to create message queues. Additionally, it contains classes used to create some specific types of message queues, such as cached and memory message queues.
---
---

<div class="module-body"> 

### Interfaces

#### [IMessageQueue](imessage_queue)
Interface for asynchronous message queues.
Not all queues may implement all the methods.
Attempt to call non-supported method will result in NotImplemented exception.
To verify if a specific method is supported check [MessagingCapabilities](messaging_capabilities).

#### [IMessageReceive](imessage_receiver)
Callback interface used to receive incoming messages.

<br>

### Classes

#### [CachedMessageQueue](cached_message_queue)
Message queue that caches received messages in memory to allow peek operations
that may not be supported by the undelying queue.  
This queue is used as a base implementation for other queues

#### [CallbackMessageReceiver](callback_message_receiver)
Wraps a message callback into IMessageReceiver

#### [LockedMessage](locked_message)
Data object used to store and lock incoming messages in [MemoryMessageQueue](memory_message_queue).

#### [MemoryMessageQueue](memory_message_queue)
Message queue that sends and receives messages within the same process by using shared memory.  
This queue is typically used for testing to mock real queues.

#### [MessageEnvelope](message_envelope)
Allows adding additional information to messages. A string id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.     
    
Side note: a MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

#### [MessageQueue](message_queue)
Abstract message queue that is used as a basis for specific message queue implementations.

#### [MessagingCapabilities](messaging_capabilities)
Data object that contains the supported capabilities of a message queue. If certain capability is not supported a queue will 
throw a NotImplemented exception.

</div>

