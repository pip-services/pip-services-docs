---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
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

> constructor(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities))

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

> `abstract` subscribe(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### unsubscribe
Unsubscribes from the message broker.

> `abstract` unsubscribe(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.



### Instance methods

#### clear
Clears component state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

> `public` peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - peeked message or **null**.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

> `public` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]] - list with peeked messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- **returns**: number - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(correlationId: string, waitTimeout: number): [MessageEnvelope](../message_envelope)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *null*.


#### sendMessageToReceiver
Sends a message to a receiver.

> `protected` sendMessageToReceiver(receiver: [IMessageReceiver](../imessage_receiver), message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver of the message.
- **message**: [MessageEnvelope](../message_envelope) - message to be sent.



### See also
- #### [MessageQueue](../message_queue)
