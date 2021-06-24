---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Interface for asynchronous message queues.

     
---

**Inherits:** [IOpenable](../../../commons/run/iopenable)

### Description

The IMessageQueue interface is used for asynchronous message queues.

Important points

- Not all queues may implement all the methods.
- An ttempt to call a non-supported method will result in a NotImplemented exception.
- To verify if a specific method is supported check [MessagingCapabilities](../messaging_capabilities). 


### Properties

#### Name
Gets the queue name
> string Name [ get ]

#### MessagingCapabilities
Gets the queue capabilities
> [MessagingCapabilities](../messaging_capabilities) Capabilities [ get ]

### Instance methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment, to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> Task AbandonAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### BeginListen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [ListenAsync](#listenasync)

> void BeginListen(string correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: string - (optional) transaction id used to trace execution through a the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


Listens for incoming messages without blocking the current thread.  

> void BeginListen(string correlationId, Func<[MessageEnvelope](../message_envelope), [IMessageQueue](), Task> callback)

- **correlationId**: string - (optional) transaction id used to trace execution through a the call chain.
- **callback**: Func<[MessageEnvelope](../message_envelope), [IMessageQueue](), Task> - receiver used to receive incoming messages.


#### Complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> Task CompleteAsync([MessageEnvelope](../message_envelope message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### EndListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> void EndListen(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### ListenAsync
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [ReceiveAsync](#receiveasync)

> Task ListenAsync(string correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.

Listens for incoming messages and blocks the current thread until queue is closed.  

> Task ListenAsync(string correlationId, Func\<[MessageEnvelope](../message_envelope), [IMessageReceiver](../imessage_receiver), Task\> callback)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: Func\<[MessageEnvelope](../message_envelope), [IMessageReceiver](../imessage_receiver), Task\> - receiver used to receive incoming messages.


#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

> Task MoveToDeadLetterAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.

#### PeekAsync
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> Task\<[MessageEnvelope](../message_envelope)\> PeekAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task\<[MessageEnvelope](../message_envelope)\> - peeked message or *null*.

#### PeekBatchAsync
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> Task\<List\<[MessageEnvelope](../message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **orrelation_id**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Task\<List\<[MessageEnvelope](../message_envelope)\>\> - peeked list with messages.

#### ReadMessageCountAsync
Reads the current number of messages in the queue to be delivered.

> Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - number of messages.

#### ReceiveAsync
Receives an incoming message and removes it from the queue.

> Task<\[MessageEnvelope](../message_envelope)\> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: Task<\[MessageEnvelope](../message_envelope)\> - received message or *null*.

#### RenewLockAsync
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> Task RenewLockAsync([MessageEnvelope](../message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### SendAsync
Sends a message into the queue.

> Task SendAsync(string correlationId, [MessageEnvelope](../message_envelope) envelope)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.

#### SendAsObjectAsync
Sends an object into the queue. Before being sent, the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> Task SendAsObjectAsync(string correlationId, string messageType, object message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - message type
- **message**: object - an object value to be sent



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)
