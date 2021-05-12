---
type: docs
title: "IMessageQueue"
linkTitle: "IMessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Interface for asynchronous message queues.

    Not all queues may implement all the methods.
    Attempt to call non-supported method will result in NotImplemented exception.
    To verify if specific method is supported consult with [MessagingCapabilities](../messaging_capabilities).   
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IClosable](../../../commons/run/iclosable)

See also [MessageEnvelope](../message_envelope), [MessagingCapabilities](../messaging_capabilities)

### Methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - a message to return.

#### begin_listen
Listens for incoming messages without blocking the current thread.  
See also [IMessageReceiver](../imessage_receiver), [listen](#listen)

> begin_listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.

#### end_listen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> end_listen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### get_capabilities
Gets the queue capabilities

> get_capabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - the queue's capabilities object.

#### get_name
Gets the queue name

> get_name(): str

- **returns**: str - the queue name.

#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### move_to_dead_letter
Permanently removes a message from the queue and sends it to dead letter queue.

> move_to_dead_letter(message: [MessagingCapabilities](../messaging_capabilities))

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns None.

> peek(correlation_id: Optional[str]): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: [MessageEnvelope](../message_envelope) - a peeked message or *None*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> peekBatch(orrelation_id: Optional[str], message_count: int): List[[MessageEnvelope](../message_envelope)]

- **orrelation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message_count**: int - a maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../message_envelope)] - a peeked list with messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> read_message_count(): int

- **returns**: int - a number of messages.

#### receive
Receives an incoming message and removes it from the queue.

> receive(correlation_id: Optional[str], wait_timeout: int): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **wait_timeout**: int - a timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - a received message or *None*.

#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renew_lock(message: [MessageEnvelope](../message_envelope), lock_timeout: int)

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lock_timeout**: int - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> send(correlation_id: Optional[str], envelope: [MessageEnvelope](../message_envelope))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - a message envelop to be sent.

#### send_as_object
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> send_as_object(correlation_id: Optional[str], message_type: str, value: Any): 

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message_type**: str - a message type
- **value**: Any - an object value to be sent



### See also
- #### [MessageEnvelope](../message_envelope)
- #### [MessagingCapabilities](../messaging_capabilities)