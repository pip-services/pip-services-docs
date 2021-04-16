---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.
    <br><br>
    This queue is typically used for testing to mock real queues.
---


##### Configuration parameters
- **name**: name of the message queue

##### References
- `*:logger:*:*:1.0` (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- `*:counters:*:*:1.0` (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements

See [MessagingCapabilities](../messaging_capabilities), [MessageQueue](../message_queue)

**Example:**
```typescript
let queue = new MessageQueue("myqueue");

queue.send("123", new MessageEnvelop(null, "mymessage", "ABC"));

queue.receive("123", (err, message) => {
    if (message != null) {
       ...
       queue.complete("123", message);
    }
});
```

### Constructors

Creates a new instance of the message queue.  
See [MessagingCapabilities](../messaging_capabilities)

> constructor(name?: string): [MemoryMessageQueue]()

- **name**: string `optional` - a queue name.
- **returns**: [MemoryMessageQueue]() - TODO: add description property


### Methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope), callback: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) - a message to return.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### beginListen
Listens for incoming messages without blocking the current thread.

See [listen](#listen), [IMessageReceiver](../imessage_receiver)

> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### clear
Clears component state.

> clear(correlationId: string, callback: (err: any) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **callback**: (err: any) => void - that receives error or null no errors occured.

#### close
Closes component and frees used resources.

> close(correlationId: string, callback: (err?: any) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **callback**: (err?: any) => void - that receives error or null no errors occured.


#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope), callback: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

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

#### isOpen
Checks if the component is opened.

> isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> moveToDeadLetter(message: [MessageEnvelope](../message_envelope), callback: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) a message to be removed.
- **callback**: (err: any) => void `optional` - function that receives an error or null for success.

#### open
Opens the component.

> open(correlationId: string, callback?: (err: any) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.

-  **callback**: (err: any) => void `optional` - callback function that receives error or null no errors occured.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> peek(correlationId: string, callback: (err: any, result: Message[MessageEnvelope](../message_envelope)Envelope) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **callback**: (err: any, result: [MessageEnvelope](../message_envelope)) => void - callback function that receives a message or error.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> peekBatch(correlationId: string, messageCount: number, callback: (err: any, result: [MessageEnvelope](../message_envelope)[]) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **callback**: (err: any, result: [MessageEnvelope](../message_envelope)[]) => void - that receives a list with messages or error.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> readMessageCount(callback: (err: any, count: number) => void): void

- **callback**: (err: any, count: number) => void - callback function that receives number of messages or error.


#### receive
Receives an incoming message and removes it from the queue.

> receive(correlationId: string, waitTimeout: number, callback: (err: any, result: [MessageEnvelope](../message_envelope)) => void): void

- **correlationId**: string `optional` - transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **callback**: (err: any, result: [MessageEnvelope](../message_envelope)) => void - callback function that receives a message or error.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number, callback?: (err: any) => void): void

- **message**: [MessageEnvelope](../message_envelope) a message to extend its lock.
- **lockTimeout**: number a locking timeout in milliseconds.
- **callback**: (err: any) => void `optional` - callback function that receives an error or null for success.

#### send
Sends a message into the queue.

> send(correlationId: string, envelope: [MessageEnvelope](../message_envelope), callback?: (err: any) => void): void

- **correlationId**: string `optional` transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) a message envelop to be sent.
- **callback**: (err: any) => void `optional` - callback function that receives error or null for success.


#### sendAsObject
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> sendAsObject(correlationId: string, messageType: string, message: any, callback?: (err: any) => void): void

- **correlationId**: string (optional) transaction id to trace execution through call chain.
- **messageType**: string a message type
- **message**: any
- **callback**: (err: any) => void `optional` - callback function that receives error or null for success.


#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### toString
Gets a string representation of the object.

> toString(): string

- **returns**: string - a string representation of the object.

#### openWithParams
Opens the component with given connection and credential parameters.

> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credential: [CredentialParams](../../../components/auth/credential_params), callback: (err: any) => void): void

- **correlationId**: string (`optional`) - transaction id to trace execution through call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **callback**: (err: any) => void - callback function that receives error or null no errors occured.


<span class="hide-title-link">

### See 
#### [MessagingCapabilities](../messaging_capabilities) 
#### [MessageQueue](../message_queue)

</span>
