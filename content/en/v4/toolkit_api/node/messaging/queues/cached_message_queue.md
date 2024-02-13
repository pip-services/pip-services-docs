---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-messaging-node"
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

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities))

- **name**: string - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of the message queue

### Fields

<span class="hide-title-link">

#### _autoSubscribe
Boolean variable indicating whether a message queue auto-subscribes or not.  

> `protected` **_autoSubscribe**: boolean

#### _messages
List of messages in a queue. 

> `protected` **_messages**: [MessageEnvelope](../message_envelope)[]

#### _receiver
Message receiver.

> `protected` **_receiver**: [IMessageReceiver](../imessage_receiver)

</span>

### Abstract methods

#### subscribe
Subscribes to the message broker.

> `public abstract` subscribe(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### unsubscribe
Unsubscribes from the message broker.

> `public abstract` unsubscribe(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.



### Instance methods

#### clear
Clears component state.

> `public` clear(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(context: [IContext](../../../components/context/icontext)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` listen(context: [IContext](../../../components/context/icontext), receiver: [IMessageReceiver](../imessage_receiver)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

> `public` peek(context: [IContext](../../../components/context/icontext)): Promise<[MessageEnvelope](../message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - peeked message or **null**.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

> `public` peekBatch(context: [IContext](../../../components/context/icontext), messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]] - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- **returns**: number - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(context: [IContext](../../../components/context/icontext), waitTimeout: number): [MessageEnvelope](../message_envelope)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *null*.


#### sendMessageToReceiver
Sends a message to a receiver.

> `protected` sendMessageToReceiver(receiver: [IMessageReceiver](../imessage_receiver), message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver of the message.
- **message**: [MessageEnvelope](../message_envelope) - message to be sent.



### See also
- #### [MessageQueue](../message_queue)
