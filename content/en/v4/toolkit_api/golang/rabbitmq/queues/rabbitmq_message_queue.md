---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rabbitmq-go"
description: >
    Message queue that sends and receives messages via a RabbitMQ message broker.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
The RabbitMQMessageQueue class allows you to create message queues that send and receive messages via a RabbitMQ message broker.


#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscoveryy)   
    - **host**:                        host name or IP address    
    - **port**:                        port number   
    - **uri**:                         resource URI or connection string with all parameters in it   
- **credential(s)**:
    - **store_key**:                   (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**:                    username
    - **password**:                    user's password


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../..//observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscoveryy) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors

#### NewEmptyRabbitMQMessageQueue
Creates a new instance of the message queue.

> NewEmptyRabbitMQMessageQueue(name string) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue's name.

#### NewRabbitMQMessageQueueFromConfig
Creates a new instance of the message queue with configuration.

> NewRabbitMQMessageQueueFromConfig(name string, config [*ConfigParams](../../../components/config/config_params)) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue name.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters


#### NewRabbitMQMessageQueue
Creates a new instance of the message queue.

> NewRabbitMQMessageQueue(name string, mqChanel *rabbitmq.Channel, queue string) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue name.
- **mqChanel**: rabbitmq.Channel - mq channel
- **queue**: string - queue


### Fields

<span class="hide-title-link">

#### Interval
Contains filtered or unexported fields
> **Interval**: time.Duration

</span>


### Instance methods

#### Abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to the dead letter queue.

> (c [*RabbitMQMessageQueue]()) Abandon(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: (err error) - error or nil if no errors occurred.

#### Clear
Clears a component's state.

> (c [*RabbitMQMessageQueue]()) Clear(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Close
Closes a component and frees used resources.

> (c [*RabbitMQMessageQueue]()) Close(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) Complete(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: (err error) - error or nil if no errors occurred.

#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQMessageQueue]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### EndListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> (c [*RabbitMQMessageQueue]()) EndListen(ctx context.Context, correlationId string)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> (c [*RabbitMQMessageQueue]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c [*RabbitMQMessageQueue]()) Listen(ctx context.Context, correlationId string, receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) MoveToDeadLetter(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: (err error) - error or nil if no errors occurred.

#### Open
Opens the component.

> (c [*RabbitMQMessageQueue]()) Open(ctx context.Context, correlationId string) error 

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> (c [*RabbitMQMessageQueue]()) Peek(ctx context.Context, correlationId string) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

> (c [*RabbitMQMessageQueue]()) PeekBatch(ctx context.Context, correlationId string, messageCount int64) (result [[]*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: (result [[]*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*RabbitMQMessageQueue]()) ReadMessageCount() (count int64, err error)

- ***returns**: (count int64, err error) - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c [*RabbitMQMessageQueue]()) Receive(ctx context.Context, correlationId string, waitTimeout time.Duration) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - received message or null if nothing was received.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) RenewLock(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.

#### Send
Sends a message into the queue.

> (c [*RabbitMQMessageQueue]()) Send(ctx context.Context, correlationId string, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: (err error) - error or nil if no errors occured.


### Examples

```go
ctx := context.Background()
queue := queues.NewEmptyRabbitMQMessageQueue("myqueue")
queue.Configure(ctx, config.NewConfigParamsFromTuples(
	"exchange", "my_exchange",
	"queue", "my_exchange",
	"options.auto_create", true,
	"connection.host", "5672",
	"connection.port", "localhost",
	"credential.username", "user",
	"credential.password", "password",
))
_ = queue.Open(ctx, "123")
_ = queue.Send(ctx, "123", cqueues.NewMessageEnvelope("", "mymessage", []byte("ABC")))
message, _ := queue.Receive(ctx, "123", 10000*time.Millisecond)
if message != nil {
	// ...
	queue.Complete(ctx, message)
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
