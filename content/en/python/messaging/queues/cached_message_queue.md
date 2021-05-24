---
type: docs
title: "CachedMessageQueue"
linkTitle: "CachedMessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Message queue that caches received messages in memory to allow peek operations
    that may not be supported by the undelying queue.
 
---

**Implements:** [ICleanable](../../../commons/run/icleanable), [MessageQueue](../message_queue) 

### Description

The CachedMessageQueue class allows you to create message queues that cache received messages in memory, to allow peek operations that may not be supported by the undelying queue.

Important points

- This queue is used as a base implementation for other queues.

### Constructors
Creates a new instance of the persistence component.

> CachedMessageQueue(name: str = None, capabilities: [MessagingCapabilities](../messaging_capabilities) = None)

- **name**: str - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of the message queue

### Fields

<span class="hide-title-link">

#### _auto_subscribe
Boolean variable indicating whether a message queue auto-subscribes or not.  

> **_auto_subscribe**: bool

#### _lock
Thread lock.

> **_lock**: threading.Lock

#### _event
Thread event.

> **_event**: threading.Event

#### _messages
List of messages in a queue. 

> **_messages**: [MessageEnvelope](../message_envelope)[]

#### _receiver
Message receiver.

> **_receiver**: [IMessageReceiver](../imessage_receiver)

</span>

### Instance methods

#### clear
Clears component state.

> `public` clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### end_listen
Ends listening for incoming messages.
When this method is call [listen](#listen) unblocks the thread and execution continues.

> end_listen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.

#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns None.

> peek(correlation_id: Optional[str]): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **returns**: [MessageEnvelope](../message_envelope) - a peeked message or **None**.


#### peek_batch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

Important: This method is not supported by MQTT.

> peek_batch(correlation_id: Optional[str], message_count: int):List[[MessageEnvelope](../message_envelope)]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message_count**: int - maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../message_envelope)] - list with peeked messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> read_message_count(): int

- **returns**: int - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(correlation_id: Optional[str], wait_timeout: int): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **wait_timeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - a received message or *None*.


#### _send_message_to_receiver
Sends a message to a receiver.

> _send_message_to_receiver(receiver: [IMessageReceiver](../imessage_receiver), message: [MessageEnvelope](../message_envelope))

- **receiver**: [IMessageReceiver](../imessage_receiver) - Receiver of the message.
- **message**: [MessageEnvelope](../message_envelope) - Message to be sent.

### Abstract methods

#### subscribe
Subscribes to the message broker.

> `abstractmethod` subscribe(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.


#### unsubscribe
Unsubscribes from the message broker.

> `abstractmethod` unsubscribe(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.


### See also
- #### [MessageQueue](../message_queue)
