---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.  
    
---

**Extends:** [MessageQueue](../message_queue) 

### Description

The MemoryMessageQueue class is used to create message queues that send and receive messages within the same process by using shared memory.

**Important points**

- This queue is typically used for testing to mock real queues.

#### Configuration parameters
- **name**: name of the message queue

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements


### Constructors

Creates a new instance of the message queue.  
See also [MessagingCapabilities](../messaging_capabilities)

> MemoryMessageQueue([String name])

- **name**: String - (optional) queue name.


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message that could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

`@override`
> Future abandon([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.


#### clear
Clears the component's state.

`@override`
> Future clear(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

`@override`
> Future complete(MessageEnvelope message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

`@override`
> void endListen(String correlationId)
 
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### isOpen
Checks if the component is opened.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

`@override`
> void listen(String correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

`@override`
> Future<[MessageEnvelope](../message_envelope)> peek(String correlationId)

- **correlationId**: String - transaction id used to trace execution through the call chain.
- **returns**: Future<[MessageEnvelope](../message_envelope)> - peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

`@override`
> Future\<List\<[MessageEnvelope](../message_envelope)\>\> peekBatch(String correlationId, int messageCount)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future\<List\<[MessageEnvelope](../message_envelope)\>\> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

`@override`
> Future\<int\> readMessageCount()

- **returns**: Future\<int\> - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

`@override`
> Future<[MessageEnvelope](../message_envelope)> receive(String correlationId, int waitTimeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope](../message_envelope)> - received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

`@override`
> Future renewLock([MessageEnvelope](../message_envelope) message, int lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

`@override`
> Future send(String correlationId, [MessageEnvelope](../message_envelope) envelope)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.


#### openWithParams
Opens the component with given connection and credential parameters.

> Future openWithParams(String correlationId, [ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters

### Examples

```dart
var queue = MessageQueue("myqueue");
await queue.send("123", MessageEnvelop(null, "mymessage", "ABC"));
var message = await queue.receive("123");
if (message != null) {
   ...
   await queue.complete("123", message);
}
```

### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

