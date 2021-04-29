---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.  
    This queue is typically used for testing to mock real queues.
---

**Extends:** [MessageQueue](../message_queue) 


##### Configuration parameters
- **name**: name of the message queue

##### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements

See also [MessagingCapabilities](../messaging_capabilities), [MessageQueue](../message_queue)

**Example:**

```typescript
let queue = new MessageQueue("myqueue");
await queue.send("123", new MessageEnvelop(null, "mymessage", "ABC"));
let message = await queue.receive("123");
if (message != null) {
   ...
   await queue.complete("123", message);
}

```

### Constructors

Creates a new instance of the message queue.  
See also [MessagingCapabilities](../messaging_capabilities)

> `public` constructor(name?: string): [MemoryMessageQueue]()

- **name**: string - (optional) a queue name.


### Methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> `public`  abandon(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to return.

#### beginListen
Listens for incoming messages without blocking the current thread.

See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> `public` beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### clear
Clears component state.

> `public`  clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### close
Closes component and frees used resources.

> `public`  close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public`  complete(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(correlationId: string): void
 
- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### getName
Gets the queue name

> `public` getName(): string 

- **returns**: string - the queue name.

#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `public`  moveToDeadLetter(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> `public`  peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - transaction id to trace execution through call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> `public`  peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - a list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public`  readMessageCount():  Promise\<void\>

- **returns**:  Promise\<void\> - a number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `public`  receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public`  renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public`  send(correlationId: string, envelope: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - a message envelop to be sent.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### openWithParams
Opens the component with given connection and credential parameters.

> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credential: [CredentialParams](../../../components/auth/credential_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters



### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

