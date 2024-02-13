---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
    Interface for asynchronous message queues.

     
---

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The IMessageQueue interface is used for asynchronous message queues.

Important points

- Not all queues may implement all the methods.
- An ttempt to call a non-supported method will result in a NotImplemented exception.
- To verify if a specific method is supported check [MessagingCapabilities](../messaging_capabilities). 

### Methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment, to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> Abandon(ctx context.Context, message [*MessageEnvelope](../message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../message_envelope) - message to return.
- **returns**: error -  error or nil no errors occured.

#### BeginListen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [listen](#listen)

> BeginListen(ctx context.Context, context [IContext](../../../components/context/icontext), receiver [IMessageReceiver](../imessage_receiver))

- **ctx**: cntext.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.

#### Complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> Complete(ctx context.Context, message [*MessageEnvelope](../message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../message_envelope) - message to remove.
- **returns**: error -  error or nil no errors occured.

#### EndListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> EndListen(context [IContext](../../../components/context/icontext))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### Capabilities
Gets the queue capabilities

> Capabilities() [*MessagingCapabilities](../messaging_capabilities)

- **returns**: [*MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.

#### Name
Gets the queue name

> Name() string

- **returns**: string - queue name.

#### Listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [Receive](#receive)

> Listen(ctx context.Context, context [IContext](../../../components/context/icontext), receiver [IMessageReceiver](../imessage_receiver)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error -  error or nil no errors occured.


#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

> MoveToDeadLetter(ctx context.Context, message [*MessageEnvelope](../message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../message_envelope) - message to be removed.
- **returns**: error -  error or nil no errors occured.

#### Peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns nil.

> Peek(ctx context.Context, context [IContext](../../../components/context/icontext)) (result [*MessageEnvelope](../message_envelope), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (result [*MessageEnvelope](../message_envelope), err error) - peeked message or *nil*.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> PeekBatch(ctx context.Context, context [IContext](../../../components/context/icontext), messageCount int64) (result [][*MessageEnvelope](../message_envelope), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: (result [][*MessageEnvelope](../message_envelope), err error) - peeked list with messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> ReadMessageCount() (count int64, err error)

- **returns**: (count int64, err error) - number of messages.

#### Receive
Receives an incoming message and removes it from the queue.

> Receive(ctx context.Context, context [IContext](../../../components/context/icontext), waitTimeout time.Duration) (result [*MessageEnvelope](../message_envelope), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: (result [*MessageEnvelope](../message_envelope), err error) - received message or *nil*.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> RenewLock(ctx context.Context, message [*MessageEnvelope](../message_envelope), lockTimeout time.Duration) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: error -  error or nil no errors occured.

#### Send
Sends a message into the queue.

> Send(ctx context.Context, context [IContext](../../../components/context/icontext), envelope [*MessageEnvelope](../message_envelope)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **envelope**: [*MessageEnvelope](../message_envelope) - message envelop to be sent.
- **returns**: error -  error or nil no errors occured.

#### SendAsObject
Sends an object into the queue. Before being sent, the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> SendAsObject(ctx context.Context, context [IContext](../../../components/context/icontext), messageType string, value interface{}) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: string - message type.
- **value**: interface{} - object value to be sent.
- **returns**: error -  error or nil no errors occured.



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)

