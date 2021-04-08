---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Interface for asynchronous message queues.

Not all queues may implement all the methods.
Attempt to call non-supported method will result in NotImplemented exception.
To verify if specific method is supported consult with [MessagingCapabilities](../messaging_capabilities).

See [MessageEnvelope](../message_envelope), [MessagingCapabilities](../messaging_capabilities)

### Methods

#### abandon
> abandon(message: [MessageEnvelope](../message_envelope), callback?: function): void

Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

- message: [MessageEnvelope](../message_envelope) a message to return.
- `Optional` callback: function (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### beginListen
> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

Listens for incoming messages without blocking the current thread.

See [IMessageReceiver](../imessage_receiver), [listen](#listen)

- correlationId: string (optional) transaction id to trace execution through call chain.
- receiver: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.

#### complete
> complete(message: [MessageEnvelope](../message_envelope), callback?: function): void

Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

- message: [MessageEnvelope](../message_envelope) a message to remove.
- `Optional` callback: function (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### endListen
> endListen(correlationId: string): void

Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

- correlationId: string (optional) transaction id to trace execution through call chain.

#### getCapabilities
> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

Gets the queue capabilities

- Returns [MessagingCapabilities](../messaging_capabilities) the queue's capabilities object.

#### getName
> getName(): string

Gets the queue name

- Returns string the queue name.

#### listen
> listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

Listens for incoming messages and blocks the current thread until queue is closed.

- correlationId: string (optional) transaction id to trace execution through call chain.

receiver: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.

See [IMessageReceiver](../imessage_receiver), [receive](#receive)

#### moveToDeadLetter
> moveToDeadLetter(message: [MessagingCapabilities](../messaging_capabilities), callback?: function): void

Permanently removes a message from the queue and sends it to dead letter queue.

- message: [MessageEnvelope](../message_envelope) a message to be removed.
- `Optional` callback: function (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### peek
> peek(correlationId: string, callback: function): void

Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

- correlationId: string (optional) transaction id to trace execution through call chain.
- callback: function callback function that receives a message or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)): void
        - err: any
        - result: [MessageEnvelope](../message_envelope)

#### peekBatch
> peekBatch(correlationId: string, messageCount: number, callback: function): void

Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

- correlationId: string (optional) transaction id to trace execution through call chain.
- messageCount: number a maximum number of messages to peek.
- callback: function callback function that receives a list with messages or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)[]): void
        - err: any
        - result: [MessageEnvelope](../message_envelope)[]

#### readMessageCount
> readMessageCount(callback: function): void

Reads the current number of messages in the queue to be delivered.

- callback: function callback function that receives number of messages or error.
    - (err: any, count: number): void
        - err: any
        - count: number

#### receive
> receive(correlationId: string, waitTimeout: number, callback: function): void

Receives an incoming message and removes it from the queue.

- correlationId: string (optional) transaction id to trace execution through call chain.
- waitTimeout: number a timeout in milliseconds to wait for a message to come.
- callback: function callback function that receives a message or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)): void
        - err: any
        - result: [MessageEnvelope](../message_envelope)

#### renewLock
> renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number, callback?: function): void

Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

- message: [MessageEnvelope](../message_envelope) a message to extend its lock.
- lockTimeout: number a locking timeout in milliseconds.
- `Optional` callback: function (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### send
> send(correlationId: string, envelope: [MessageEnvelope](../message_envelope), callback?: function): void

Sends a message into the queue.

- correlationId: string (optional) transaction id to trace execution through call chain.
- envelope: MessageEnvelope a message envelop to be sent.
- `Optional` callback: function (optional) callback function that receives error or null for success.
    - (err: any): void
    - err: any

#### sendAsObject
> sendAsObject(correlationId: string, messageType: string, value: any, callback?: function): void

Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).


correlationId: string
(optional) transaction id to trace execution through call chain.

- messageType: string a message type
- value: any an object value to be sent
- `Optional` callback: function (optional) callback function that receives error or null for success.
    - (err: any): void
        - err: any

See [send](#send)


