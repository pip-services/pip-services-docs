---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Message queue that caches received messages in memory to allow peek operations
    that may not be supported by the undelying queue.
 
    This queue is users as a base implementation for other queues
---

**Extends:** [MessageQueue](../message_queue) 

**Implements:** [ICleanable](../../../commons/run/icleanable)

See also [MessageQueue](../message_queue)

### Constructors
Creates a new instance of the persistence component.

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities)): [CachedMessageQueue]()

- **name**: string - (optional) a queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) a capabilities of this message queue

### Fields

<span class="hide-title-link">

#### _autoSubscribe
TODO: add description property  

> `protected` _autoSubscribe: boolean

#### _messages
TODO: add description property  

> `protected` **_messages**: [MessageEnvelope](../message_envelope)[]

#### _receiver
TODO: add description property  

> `protected` **_receiver**: [IMessageReceiver](../imessage_receiver)

</span>

### Methods

#### clear
Clears component state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is call [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### listen
Listens for incoming messages and blocks the current thread until queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

> `public` peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a peeked message or **null**.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

> `public` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - a list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- **returns**: Promise\<number\> - a number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)> 

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a received message or *null*.


#### sendMessageToReceiver
TODO: add description

> `protected` sendMessageToReceiver(receiver: [IMessageReceiver](../imessage_receiver), message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **receiver**: [IMessageReceiver](../imessage_receiver) - TODO: add description
- **message**: [MessageEnvelope](../message_envelope) - TODO: add description


#### subscribe
Subscribes to the message broker.

> `protected abstract` subscribe(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### unsubscribe
Unsubscribes from the message broker.

> `protected abstract` unsubscribe(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


### See also
- #### [MessageQueue](../message_queue)
