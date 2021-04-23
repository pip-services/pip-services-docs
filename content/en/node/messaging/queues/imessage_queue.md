---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Interface for asynchronous message queues.

    Not all queues may implement all the methods.
    Attempt to call non-supported method will result in NotImplemented exception.
    To verify if specific method is supported consult with [MessagingCapabilities](../messaging_capabilities).   
---

**Extends:** [IOpenable](../../../commons/run/iopenable), [IClosable](../../../commons/run/iclosable)

See also [MessageEnvelope](../message_envelope), [MessagingCapabilities](../messaging_capabilities)

### Methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to return.

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [listen](#listen)

> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.

#### endListen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### getCapabilities
Gets the queue capabilities

> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - the queue's capabilities object.

#### getName
Gets the queue name

> getName(): string

- **returns**: string - the queue name.

#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> moveToDeadLetter(message: [MessagingCapabilities](../messaging_capabilities)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - a peeked list with messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> readMessageCount(): Promise\<number\>

- **returns**: Promise\<number\> - a number of messages.

#### receive
Receives an incoming message and removes it from the queue.

> receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> send(correlationId: string, envelope: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - a message envelop to be sent.

#### sendAsObject
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> sendAsObject(correlationId: string, messageType: string, value: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageType**: string - a message type
- **value**: any - an object value to be sent



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)