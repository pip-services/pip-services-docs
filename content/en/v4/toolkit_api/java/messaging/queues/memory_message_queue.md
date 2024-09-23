---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.  
    
---

**Extends:** [MessageQueue](../message_queue) 

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

> `public` MemoryMessageQueue(String name)

- **name**: String - (optional) a queue name.


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message that could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `public` void abandon([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.


#### clear
Clears the component's state.

> `public` void clear([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public` void complete([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.

#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> void endListen([IContext](../../../components/context/icontext) context) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### isOpen
Checks if the component is opened.

> `public` boolean isOpen()

- **returns**: boolean - True if the component is open and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public` void listen([IContext](../../../components/context/icontext) context, [IMessageReceiver](../imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> `public` [MessageEnvelope](../message_envelope)e peek([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **returns**: [MessageEnvelope](../message_envelope) - peeked message or *null*.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `public` List<[MessageEnvelope](../message_envelope)> peekBatch([IContext](../../../components/context/icontext) context, int messageCount)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: [MessageEnvelope](../message_envelope)[] - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` int readMessageCount()

- **returns**: int - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `public` [MessageEnvelope](../message_envelope) receive([IContext](../../../components/context/icontext) context, long waitTimeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**:[MessageEnvelope](../message_envelope) - received message or *null*.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public` void renewLock([MessageEnvelope](../message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public` void send([IContext](../../../config/connect/connection_paramst) context, [MessageEnvelope](../message_envelope) message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.


#### openWithParams
Opens the component with given connection and credential parameters.

> `protected` void openWithParams([IContext](../../../config/connect/connection_paramst) context, [ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../config/auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [ConnectionParams](../../../config/connect/connection_params)[] - connection parameters
- **credential**: [CredentialParams](../../../config/auth/credential_params) - credential parameters

### Examples

```java
 {@code
  MessageQueue queue = new MessageQueue("myqueue");
 
  queue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));
 
  queue.receive("123", 0);
  }
  </pre>
 
  @see MessageQueue
  @see MessagingCapabilities
```

### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

