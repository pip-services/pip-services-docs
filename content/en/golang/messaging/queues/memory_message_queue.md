---
type: docs
title: "MemoryMessageQueue"
linkTitle: "MemoryMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-messaging-go"
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements


### Constructors

#### NewMemoryMessageQueue
Creates a new instance of the message queue.  
See also [MessagingCapabilities](../messaging_capabilities)

> NewMemoryMessageQueue(name string) [*MemoryMessageQueue]()

- **name**: string - (optional) a queue name.


### Methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message that could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> (c [*MemoryMessageQueue]()) Abandon(message [*MessageEnvelope](../message_envelope)) (err error)

- **message**: [*MessageEnvelope](../message_envelope) - message to return.
- **returns**: (err error) -  error or nil no errors occured.


#### Clear
Clears the component's state.

> (c [*MemoryMessageQueue]()) Clear(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) -  error or nil no errors occured.

#### Close
Closes the component and frees used resources.

> (c [*MemoryMessageQueue]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) -  error or nil no errors occured.

#### Complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> (c [*MemoryMessageQueue]()) Complete(message [*MessageEnvelope](../message_envelope)) (err error)

- **message**: [*MessageEnvelope](../message_envelope) - message to remove.
- **returns**: (err error) -  error or nil no errors occured.

#### EndListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> (c [*MemoryMessageQueue]()) EndListen(correlationId string)
 
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.


#### IsOpen
Checks if the component is opened.

> (c [*MemoryMessageQueue]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> (c [*MemoryMessageQueue]()) Listen(correlationId string, receiver [IMessageReceiver](../imessage_receiver)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error -  error or nil no errors occured.


#### Open
Opens the component with given connection and credential parameters.

> (c [*MemoryMessageQueue]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) -  error or nil no errors occured.


#### Peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> (c [*MemoryMessageQueue]()) Peek(correlationId string) (result [*MessageEnvelope](../message_envelope), err error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **returns**: (result [*MessageEnvelope](../message_envelope), err error) - peeked message or *null*.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> (c [*MemoryMessageQueue]()) PeekBatch(correlationId string, messageCount int64) (result [][*MessageEnvelope](../message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: (result [][*MessageEnvelope](../message_envelope), err error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*MemoryMessageQueue]()) ReadMessageCount() (count int64, err error)

- **returns**: (count int64, err error) - number of messages in the queue.


#### Receive
Receives an incoming message and removes it from the queue.

> (c [*MemoryMessageQueue]()) Receive(correlationId string, waitTimeout time.Duration) ([*MessageEnvelope](../message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: ([*MessageEnvelope](../message_envelope), error) - received message or *null*.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> (c [*MemoryMessageQueue]()) RenewLock(message [*MessageEnvelope](../message_envelope), lockTimeout time.Duration) (err error)

- **message**: [*MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: error -  error or nil no errors occured.

#### Send
Sends a message into the queue.

> (c [*MemoryMessageQueue]()) Send(correlationId string, envelope [*MessageEnvelope](../message_envelope)) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **envelope**: [*MessageEnvelope](../message_envelope) - message envelop to be sent.
- **returns**: (err error) -  error or nil no errors occured.

### Examples

```go
queue := NewMessageQueue("myqueue");
queue.Send("123", NewMessageEnvelop("", "mymessage", "ABC"));
message, err := queue.Receive("123")
if (message != nil) {
   ...
   queue.Complete("123", message);
}
```

### See also
- #### [MessagingCapabilities](../messaging_capabilities) 
- #### [MessageQueue](../message_queue)

