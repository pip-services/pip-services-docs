---
type: docs
title: "NatsMessageQueue"
linkTitle: "NatsMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-nats-go"
description: >
    Message queue that sends and receives messages via the NATS message broker.
    
---

**Implements:** [NatsAbstractMessageQueue](../nats_abstract_message_queue)

### Description

The NatsMessageQueue class allows you to create a message queue that sends and receives messages via the NATS message broker.

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
    - **serialize_message**: (optional) true to serialize entire message as JSON, false to send only the message payload (default: true)
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) shared connection to NATS service


### Constructors

#### NewNatsMessageQueue
Creates a new instance of the message queue.

> NewNatsMessageQueue(name string) [*NatsMessageQueue]()

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">


#### autoSubscribe
Auto-subscribe option
> **autoSubscribe**: bool


#### messages
Messages
> **messages**: [[]MessageEnvelope](../../../messaging/queues/message_envelope)

#### receiver
Message receiver
> **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### subscribed
Subscribe option
> **subscribed**: bool

</span>


### Methods

#### Clear
Clears a component's state.

> (c [*NatsMessageQueue[T]]) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: string - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.


#### Close
Closes a component and frees used resources.

> (c [*NatsMessageQueue[T]]) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*NatsMessageQueue[T]]) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config:**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### EndListen
Ends listening for incoming messages.
When this method is called, [Listen](#listen) unblocks the thread and execution continues.

> (c [*NatsMessageQueue[T]]) EndListen(ctx context.Context, context [IContext](../../../components/context/icontext))

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c [*NatsMessageQueue[T]]) Listen(ctx context.Context, context [IContext](../../../components/context/icontext), receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error - error or nil no errors occured.


#### OnMessage
Checks if the message is not nil. If this is the case, it deserializes and sends the message to the receiver if it's set. Otherwise, puts the message into the queue.

> (c [*NatsMessageQueue[T]]) OnMessage(msg *nats.Msg)

- **msg**: *nats.Msg - message


#### Open
Opens the component.

> (c [*NatsMessageQueue[T]]) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns nil.

> (c [*NatsMessageQueue[T]]) Peek(ctx context.Context, context [IContext](../../../components/context/icontext)) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

> (c [*NatsMessageQueue[T]]) PeekBatch(ctx context.Context, context [IContext](../../../components/context/icontext), messageCount int64) ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*NatsMessageQueue[T]]) ReadMessageCount() (count int64, err error)

- ***returns**: (count int64, err error) - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c [*NatsMessageQueue[T]]) Receive(ctx context.Context, context [IContext](../../../components/context/icontext), waitTimeout time.Duration) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **waitTimeout**: time.Duration - timeout (milliseconds) to wait for a message to come.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - received message or nil if nothing was received.


#### Subscribe
Subscribes to a subject.
> (c [*NatsMessageQueue[T]]) subscribe(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


### Examples

```go
ctx := context.Background()
queue := NewNatsMessageQueue("myqueue")
queue.Configure(ctx, cconf.NewConfigParamsFromTuples(
	"subject", "mytopic",
	"queue_group", "mygroup",
	"connection.protocol", "nats"
	"connection.host", "localhost"
	"connection.port", 1883
))

_ = queue.Open(ctx, "123")

_ = queue.Send(ctx, "123", NewMessageEnvelope("", "mymessage", "ABC"))

message, err := queue.Receive(ctx, "123", 10000*time.Milliseconds)
if (message != nil) {
	...
	queue.Complete(ctx, message)
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)

