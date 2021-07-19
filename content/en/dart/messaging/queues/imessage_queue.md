---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Interface for asynchronous message queues.

     
---

**Extends:** [IOpenable](../../../commons/run/iopenable), [IClosable](../../../commons/run/iclosable)

### Description

The IMessageQueue interface is used for asynchronous message queues.

Important points

- Not all queues may implement all the methods.
- An ttempt to call a non-supported method will result in a NotImplemented exception.
- To verify if a specific method is supported check [MessagingCapabilities](../messaging_capabilities). 

### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment, to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> Future abandon([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [listen](#listen)

> void beginListen(String correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: String - (optional) transaction id used to trace execution through a the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> Future complete([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> void endListen(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### getCapabilities
Gets the queue capabilities

> [MessagingCapabilities](../messaging_capabilities) getCapabilities()

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.

#### getName
Gets the queue name

> String getName()

- **returns**: String - queue name.

#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> void listen(String correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

> Future moveToDeadLetter([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> Future<[MessageEnvelope](../message_envelope)> peek(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future<[MessageEnvelope](../message_envelope)> - peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> Future\<List\<[MessageEnvelope](../message_envelope)\>\> peekBatch(String correlationId, int messageCount)

- **orrelation_id**: String - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future\<List\<[MessageEnvelope](../message_envelope)\>\> - peeked list with messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> Future\<int\> readMessageCount()

- **returns**: Future\<int\> - number of messages.

#### receive
Receives an incoming message and removes it from the queue.

> Future<[MessageEnvelope](../message_envelope)> receive(String correlationId, int waitTimeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope](../message_envelope)> - received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> Future renewLock([MessageEnvelope](../message_envelope) message, int lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> Future send(String correlationId, [MessageEnvelope](../message_envelope) envelope)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.

#### sendAsObject
Sends an object into the queue. Before being sent, the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> Future sendAsObject(String correlationId, String messageType, value)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **messageType**: String - message type
- **value**: dynamic - object value to be sent



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)
