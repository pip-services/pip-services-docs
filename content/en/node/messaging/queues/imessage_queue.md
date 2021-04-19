---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Interface for asynchronous message queues.

    Not all queues may implement all the methods.
    Attempt to call non-supported method will result in NotImplemented exception.
    To verify if specific method is supported consult with [MessagingCapabilities](../messaging_capabilities).   
---
See [MessageEnvelope](../message_envelope), [MessagingCapabilities](../messaging_capabilities)

### Methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope), callback?: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) - a message to return.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### beginListen
Listens for incoming messages without blocking the current thread.

> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

See [IMessageReceiver](../imessage_receiver), [listen](#listen)

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope), callback?: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### endListen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> endListen(correlationId: string): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.

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
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> moveToDeadLetter(message: [MessagingCapabilities](../messaging_capabilities), callback?: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> peek(correlationId: string, callback: (err: any, result: MessageEnvelope) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **callback**: (err: any, result: [MessageEnvelope](../message_envelope)) => void - callback function that receives a message or error.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> peekBatch(correlationId: string, messageCount: number, callback: (err: any, result: [MessageEnvelope](../message_envelope)[]) => void): void

- **correlationId**: string - `optional` transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **callback**: (err: any, result: [MessageEnvelope](../message_envelope)[]) => void - callback function that receives a list with messages or error.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> readMessageCount(callback: (err: any, count: number) => void): void

- **callback**: (err: any, count: number) => void - callback function that receives number of messages or error.

#### receive
Receives an incoming message and removes it from the queue.

> receive(correlationId: string, waitTimeout: number, callback: (err: any, result: [MessageEnvelope](../message_envelope)) => void): void

- **correlationId**: string - `optional` transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **callback**:  (err: any, result: [MessageEnvelope](../message_envelope)) => void - callback function that receives a message or error.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number, callback?: function): void

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.
- callback:function `optional` - callback function that receives an error or null for success.

#### send
Sends a message into the queue.

> send(correlationId: string, envelope: [MessageEnvelope](../message_envelope), callback?: (err: any) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **envelope**: MessageEnvelope - a message envelop to be sent.
- **callback**: (err: any) => void `optional` - callback function that receives error or null for success.

#### sendAsObject
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> sendAsObject(correlationId: string, messageType: string, value: any, callback?: (err: any) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **messageType**: string - a message type
- **value**: any - an object value to be sent
- **callback**: (err: any) => void `optional` - callback function that receives error or null for success.



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)