---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    Message queue that caches received messages in memory to allow peek operations
    that may not be supported by the undelying queue.
 
---

**Extends:** [MessageQueue](../message_queue) 

**Implements:** [ICleanable](../../../components/run/icleanable) 

### Description

The CachedMessageQueue class allows you to create message queues that cache received messages in memory, to allow peek operations that may not be supported by the undelying queue.

Important points

- This queue is used as a base implementation for other queues.

### Constructors
Creates a new instance of the persistence component.

> `public` CachedMessageQueue(String name, [MessagingCapabilities](../messaging_capabilities) capabilities)

- **name**: String - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of the message queue

### Fields

<span class="hide-title-link">

#### _autoSubscribe
Boolean variable indicating whether a message queue auto-subscribes or not.  

> `protected` boolean **_autoSubscribe**;

#### _messages
List of messages in a queue. 

> `protected` **_messages**: [MessageEnvelope](../message_envelope)[]

#### _receiver
Message receiver.

> `protected` List<[IMessageReceiver](../imessage_receiver)> **_messages**;

</span>

### Abstract methods

#### subscribe
Subscribes to the message broker.

> `public abstract` void subscribe([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### unsubscribe
Unsubscribes from the message broker.

> `public abstract` void unsubscribe([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.



### Instance methods

#### clear
Clears component state.

> `public` void clear([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public` void endListen([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` void listen([IContext](../../../components/context/icontext) context, [IMessageReceiver](../imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

> `public` [MessageEnvelope](../message_envelope) peek([IContext](../../../components/context/icontext) context) throws InvalidStateException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: [MessageEnvelope](../message_envelope) - peeked message or **null**.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

> `public` List<[MessageEnvelope](../message_envelope)> peekBatch([IContext](../../../components/context/icontext) context, int messageCount) throws InvalidStateException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: List<[MessageEnvelope](../message_envelope)> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` int readMessageCount()

- **returns**: int - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` [MessageEnvelope](../message_envelope) receive([IContext](../../../components/context/icontext) context, long waitTimeout) throws InvalidStateException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *null*.


#### sendMessageToReceiver
Sends a message to a receiver.

> `protected` void sendMessageToReceiver([IMessageReceiver](../imessage_receiver) receiver, [MessageEnvelope](../message_envelope) message)

- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver of the message.
- **message**: [MessageEnvelope](../message_envelope) - message to be sent.



### See also
- #### [MessageQueue](../message_queue)
