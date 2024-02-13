---
type: docs
title: "NatsBareMessageQueue"
linkTitle: "NatsBareMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-nats-go"
description: >
    Message queue that sends and receives messages via a NATS message broker.
    
---

**Extends:** [NatsAbstractMessageQueue](../nats_abstract_message_queue)


### Description

The NatsBareMessageQueue class allows you to create message queues that send and receive messages via a NATS message broker.

#### Configuration parameters

- **subject**: name of NATS topic (subject) to subscribe
- **queue_group**: name of NATS queue group
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **serialize_message**: (optional) true to serialize the entire message as JSON, false to only send the message payload (default: true)
    - **retry_connect**: (optional) turns on/off automated reconnect when the connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) Shared connection to NATS service


### Constructors

#### NewNatsBareMessageQueue
Creates a new instance of the message queue.

> NewNatsBareMessageQueue(name string) [*NatsBareMessageQueue]()

- **name**: string - (optional) queue name.


### Methods

#### EndListen
Ends listening for incoming messages.
When this method is called, [Listen](#listen) unblocks the thread and execution continues.

> (c [*NatsBareMessageQueue[T]]) EndListen(ctx context.Context, context [IContext](../../../components/context/icontext))

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c [*NatsBareMessageQueue[T]]) Listen(ctx context.Context, context [IContext](../../../components/context/icontext), receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error - error or nil if no errors occurred.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns nil.

> (c [*NatsBareMessageQueue[T]]) Peek(ctx context.Context, context [IContext](../../../components/context/icontext)) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

> (c [*NatsBareMessageQueue[T]]) PeekBatch(ctx context.Context, context [IContext](../../../components/context/icontext), messageCount int64) ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error) - list with peeked messages.

#### Receive
Receives an incoming message and removes it from the queue.

> (c [*NatsBareMessageQueue[T]]) Receive(ctx context.Context, context [IContext](../../../components/context/icontext), waitTimeout time.Duration) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - received message or nil if nothing was received.


### Examples

```go
ctx := context.Background()
queue := NewNatsBareMessageQueue("myqueue")
queue.Configure(ctx, cconf.NewConfigParamsFromTuples(
	"subject", "mytopic",
	"queue_group", "mygroup",
	"connection.protocol", "nats"
	"connection.host", "localhost"
	"connection.port", 1883,
))

_ = queue.Open(ctx, "123")

_ = queue.Send(ctx, "123", NewMessageEnvelope("", "mymessage", "ABC"))

message, err := queue.Receive(ctx, "123", 10000*time.Milliseconds)
if (message != nil) {
	...
	queue.Complete(ctx, message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)

