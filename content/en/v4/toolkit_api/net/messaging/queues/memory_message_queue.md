---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Message queue that sends and receives messages within the same process by using shared memory.  
    
---

**Inherits:** [MessageQueue](../message_queue) 

### Description

The MemoryMessageQueue class is used to create message queues that send and receive messages within the same process by using shared memory.

**Important points**

- This queue is typically used for testing to mock real queues.

#### Configuration parameters
- **name**: name of the message queue

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements


### Constructors

Creates a new instance of the message queue.  
See also [MessagingCapabilities](../messaging_capabilities)

> `public` MemoryMessageQueue(string name = null)

- **name**: string - (optional) a queue name.


### Instance methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message that could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `public override` Task AbandonAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.


#### ClearAsync
Clears the component's state.

> `public override` Task ClearAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### CloseAsync
Closes the component and frees used resources.

> `public override`  Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### CompleteAsync
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public override` Task CompleteAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### EndListen
Ends listening for incoming messages. When this method is called, [ListenAsync](#listenasync) unblocks the thread and execution continues.

> `public override` void EndListen(IContext context)
 
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### ListenAsync
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [ReceiveAsync](#receiveasync)

> `public override` Task ListenAsync(IContext context, [IMessageReceiver](../imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### Peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> `public override` Task\<[MessageEnvelope](../message_envelope)\> PeekAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task\<[MessageEnvelope](../message_envelope)\> - peeked message or *null*.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `public override` Task\<List\<[MessageEnvelope](../message_envelope)\>\> PeekBatchAsync(IContext context, int messageCount)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Task\<List\<[MessageEnvelope](../message_envelope)\>\> - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> `public override` Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - number of messages in the queue.


#### ReceiveAsync
Receives an incoming message and removes it from the queue.

> `public override` Task\<[MessageEnvelope](../message_envelope)\> ReceiveAsync(IContext context, long waitTimeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: Task\<[MessageEnvelope](../message_envelope)\> - received message or *null*.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public override` Task RenewLockAsync([MessageEnvelope](../message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### SendAsync
Sends a message into the queue.

> `public override` Task SendAsync(IContext context, [MessageEnvelope](../message_envelope) message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.


### Examples

```cs
var queue = new MessageQueue("myqueue");

queue.SendAsync("123", new MessageEnvelop(null, "mymessage", "ABC"));

queue.ReceiveAsync("123", 0);
```

### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

