---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-messaging-node"
description: >
    Interface for asynchronous message queues.

     
---

**Extends:** [IOpenable](../../../components/run/iopenable), [IClosable](../../../components/run/iclosable)

### Description

The IMessageQueue interface is used for asynchronous message queues.

Important points

- Not all queues may implement all the methods.
- An ttempt to call a non-supported method will result in a NotImplemented exception.
- To verify if a specific method is supported check [MessagingCapabilities](../messaging_capabilities). 

### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment, to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [listen](#listen)

> beginListen(context: [IContext](../../../components/context/icontext), receiver: [IMessageReceiver](../imessage_receiver)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> endListen(context: [IContext](../../../components/context/icontext)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### getCapabilities
Gets the queue capabilities

> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.

#### getName
Gets the queue name

> getName(): string

- **returns**: string - queue name.

#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(context: [IContext](../../../components/context/icontext), receiver: [IMessageReceiver](../imessage_receiver)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

> moveToDeadLetter(message: [MessagingCapabilities](../messaging_capabilities)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> peek(context: [IContext](../../../components/context/icontext)): Promise<[MessageEnvelope](../message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> peekBatch(context: [IContext](../../../components/context/icontext), messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - peeked list with messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> readMessageCount(): Promise\<number\>

- **returns**: Promise\<number\> - number of messages.

#### receive
Receives an incoming message and removes it from the queue.

> receive(context: [IContext](../../../components/context/icontext), waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: number - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> send(context: [IContext](../../../components/context/icontext), envelope: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.

#### sendAsObject
Sends an object into the queue. Before being sent, the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> sendAsObject(context: [IContext](../../../components/context/icontext), messageType: string, value: any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: string - message type
- **value**: any - object value to be sent



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)
