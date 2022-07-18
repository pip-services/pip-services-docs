---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Message queue that caches received messages in memory to allow peek operations
    that may not be supported by the undelying queue.
 
---

**Extends:** [MessageQueue](../message_queue) 

**Implements:** [ICleanable](../../../commons/run/icleanable) 

### Description

The CachedMessageQueue class allows you to create message queues that cache received messages in memory, to allow peek operations that may not be supported by the undelying queue.

Important points

- This queue is used as a base implementation for other queues.

### Constructors
Creates a new instance of the persistence component.

>   CachedMessageQueue(String? name, [MessagingCapabilities?](../messaging_capabilities) capabilities)

- **name**: String? - (optional) queue name
- **capabilities**: [MessagingCapabilities?](../messaging_capabilities) - (optional) capabilities of the message queue

### Fields

<span class="hide-title-link">

#### _autoSubscribe
Boolean variable indicating whether a message queue auto-subscribes or not.  

> **_autoSubscribe**: boolean

#### _messages
List of messages in a queue. 

> **_messages**: List<[MessageEnvelope?](../message_envelope)>

#### _receiver
Message receiver.

> **_receiver**: [IMessageReceiver?](../imessage_receiver)

</span>


### Instance methods

#### clear
Clears component state.

`@override`
> Future\<void\> clear(String? correlationId): Promise\<void\>

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is called, [listen](#listen) unblocks the thread and execution continues.

> void endListen(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.

#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

`@override`
> void listen(String? correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### open
Opens the component.

`@override`
> Future open(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

`@override`
> Future<[MessageEnvelope?](../message_envelope)> peek(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future<[MessageEnvelope?](../message_envelope)> - peeked message or **null**.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

`@override`
> Future<List<[MessageEnvelope?](../message_envelope)>> peekBatch(String? correlationId, int messageCount)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future<List<[MessageEnvelope?](../message_envelope)>> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

`@override`
> Future\<int\> readMessageCount()

- **returns**: Future\<int\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

`@override`
> Future<[MessageEnvelope?](../message_envelope)> receive(String? correlationId, int waitTimeout)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope?](../message_envelope)> - received message or *null*.


#### sendMessageToReceiver
Sends a message to a receiver.

> Future sendMessageToReceiver([IMessageReceiver?](../imessage_receiver) receiver, [MessageEnvelope?](../message_envelope) message)

- **receiver**: [IMessageReceiver?](../imessage_receiver) - receiver of the message.
- **message**: [MessageEnvelope?](../message_envelope) - message to be sent.


#### subscribe
Subscribes to the message broker.

> Future subscribe(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.


#### unsubscribe
Unsubscribes from the message broker.

> Future unsubscribe(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.


### See also
- #### [MessageQueue](../message_queue)
