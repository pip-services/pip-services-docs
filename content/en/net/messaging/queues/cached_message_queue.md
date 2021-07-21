---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Message queue that caches received messages in memory to allow peek operations
    that may not be supported by the undelying queue.
 
---

**Inherts:** [MessageQueue](../message_queue), [ICleanable](../../../commons/run/icleanable) 

### Description

The CachedMessageQueue class allows you to create message queues that cache received messages in memory, to allow peek operations that may not be supported by the undelying queue.

**Important points**

- This queue is used as a base implementation for other queues.

### Constructors
Creates a new instance of the persistence component.

> `public` CachedMessageQueue(string name = null, [MessagingCapabilities](../messaging_capabilities) capabilities = null)

- **name**: string - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of the message queue

### Fields

<span class="hide-title-link">

#### _autoSubscribe
Boolean variable indicating whether a message queue auto-subscribes or not.  

> `protected` **_autoSubscribe**: bool

#### _messages
List of messages in a queue. 

> `protected` **_messages**: [MessageEnvelope](../message_envelope)[]

#### _receiver
Message receiver.

> `protected` **_receiver**: [IMessageReceiver](../imessage_receiver)

#### _receiveEvent
Receive event
> `protected` **_receiveEvent**: ManualResetEvent

</span>

### Abstract methods

#### SubscribeAsync
Subscribes to the message broker.

> `protected abstract` Task SubscribeAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### UnsubscribeAsync
Unsubscribes from the message broker.

> `protected abstract` Task UnsubscribeAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.



### Instance methods

#### Clear
Clears component state.

> `public override` Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing its configuration parameters.

> `public override` Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### EndListen
Ends listening for incoming messages.
When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public override` void EndListen(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### ListenAsync
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [Receive](#receive)

> `public override` Task ListenAsync(string correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### PeekAsync
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> `public override` Task\<[MessageEnvelope](../message_envelope)\> PeekAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task\<[MessageEnvelope](../message_envelope)\> - peeked message or **null**.


#### PeekBatchAsync
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

Important: This method is not supported by MQTT.

> `public override` Task\<List\<[MessageEnvelope](../message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Task\<List\<[MessageEnvelope](../message_envelope)\>\> - list with peeked messages.

#### ReadMessageCountAsync
Reads the current number of messages in the queue to be delivered.

> `public override` Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - number of messages in the queue.

#### ReceiveAsync
Receives an incoming message and removes it from the queue.

> `public override` Task<[MessageEnvelope](../message_envelope)> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: Task<[MessageEnvelope](../message_envelope)> - received message or *null*.



### See also
- #### [MessageQueue](../message_queue)
