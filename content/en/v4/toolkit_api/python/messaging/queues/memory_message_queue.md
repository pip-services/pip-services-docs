---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-messaging-pythonn"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.  
    
---

**Implements:** [MessageQueue](../message_queue) 

### Description

The MemoryMessageQueue class is used to create message queues that send and receive messages within the same process by using shared memory.

Important points

- This queue is typically used for testing to mock real queues.

#### Configuration parameters
- **name**: name of the message queue

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements


### Constructors

Creates a new instance of the message queue.  
See also [MessagingCapabilities](../messaging_capabilities)

> MemoryMessageQueue(name: str = None)

- **name**: str - (optional) a queue name.


### Fields

<span class="hide-title-link">

#### _lock
Threading lock.

> **_lock**: threading.Lock

#### _event
Threading event.

> **_event**: threading.Event


</span>


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message that could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> abandon(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - message to return.


#### clear
Clears the component's state.

> clear(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.

#### close
Closes the component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### end_listen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> end_listen(context: Optional[IContext])
 
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - True if the component is open and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> listen(context: Optional[IContext], receiver: [IMessageReceiver](../imessage_receiver))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns None.

> peek(context: Optional[IContext]): [MessageEnvelope](../message_envelope)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: [MessageEnvelope](../message_envelope) - peeked message or *None*.

#### peek_batch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> peek_batch(context: Optional[IContext], message_count: int): List[[MessageEnvelope](../message_envelope)]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message_count**: int - maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../message_envelope)] - list with peeked messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> read_message_count(): int

- **returns**:  int - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> receive(context: Optional[IContext], wait_timeout: int): [MessageEnvelope](../message_envelope)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **wait_timeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *None*.

#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> renew_lock(message: [MessageEnvelope](../message_envelope), lock_timeout: int)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lock_timeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> send(context: Optional[IContext], envelope: [MessageEnvelope](../message_envelope))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.


#### _open_with_params
Opens the component with given connection and credential parameters.

> _open_with_params(context: Optional[IContext], connections: List[[ConnectionParams](../../../config/connect/connection_params)], credentials: [CredentialParams](../../../config/auth/credential_params))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: List[[ConnectionParams](../../../config/connect/connection_params)] - connection parameters
- **credential**: [CredentialParams](../../../config/auth/credential_params) - credential parameters

### Examples

```python
queue = MessageQueue("myqueue")
queue.send("123", MessageEnvelope(None, "mymessage", "ABC"))

message = queue.receive("123", 0)
if message != None:
    # ...
    queue.complete("123", message)
```

### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

