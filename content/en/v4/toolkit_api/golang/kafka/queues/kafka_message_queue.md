---
type: docs
title: "KafkaMessageQueue"
linkTitle: "KafkaMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-kafka-go"
description: >
    Message queue that sends and receives messages via the Kafka message broker.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue)


### Description
The KafkaMessageQueue class allows you to create message queues that send and receive messages via the Kafka message broker.

#### Configuration parameters

- **topic**: name of Kafka topic to subscribe
- **group_id**: (optional) consumer group id (default: default)
- **from_beginning**: (optional) restarts receiving messages from the beginning (default: false)
- **read_partitions**: (optional) number of partitions to be consumed concurrently (default: 1)
- **autocommit**: (optional) turns on/off autocommit (default: true)
- **connection**(s):
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **read_partitions**: (optional) list of partition indexes to be read (default: all, set for example: "1;5;7")
    - **write_partition**: (optional) list of partition indexes to be read (default: auto (-1))
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **log_level**: (optional) log level 0 - None, 1 - Error, 2 - Warn, 3 - Info, 4 - Debug (default: 1)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials
- **\*:connection:kafka:\*:1.0** - (optional) shared connection to Kafka service


### Constructors

#### NewKafkaMessageQueue

Creates a new instance of the message queue.

> NewKafkaMessageQueue(name string) [*KafkaMessageQueue]()

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">

#### autoCommit
Autocommit option
> **autoCommit**: bool

#### autoSubscribe
Autosubscribe option
> **autoSubscribe**: bool

#### Connection
Kafka connection component.
> **Connection**: [KafkaConnection](../../connect/kafka_connection)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../refer/dependency_resolver/)

#### fromBeginning
From beginning (Subscribe option)
> **fromBeginning**: bool

#### groupId
Group id
> **groupId**: string

#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)


#### messages
Messages
> **messages**: [[]MessageEnvelope](../../../messaging/queues/message_envelope)

#### readablePartitions
Partition
> **readablePartitions**: []int32

#### writePartition
Partition for writing (default -1)
> **writePartition**: int

#### receiver
Message receiver
> **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### subscribed
Option to subscribe
> **subscribed**: bool

#### topic
Topic
> **topic**: string

</span>


### Methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment,
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and sent to the dead letter queue.

> (c [*KafkaMessageQueue]()) Abandon(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: error - error or nil no errors occured.

#### Clear
Clears a component's state.

> (c [*KafkaMessageQueue]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.

#### Cleanup
Cleanup is run at the end of a session, once all ConsumeClaim goroutines have exited
but before the offsets are committed for the very last time.

> Cleanup(session kafka.ConsumerGroupSession) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **returns**: error - setup error.

#### ConsumeClaim
ConsumeClaim must start a consumer loop of ConsumerGroupClaim's Messages().
Once the Messages() channel is closed, the Handler must finish its processing
loop and exit.

> ConsumeClaim(session kafka.ConsumerGroupSession, group kafka.ConsumerGroupClaim) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **group**: kafka.ConsumerGroupClaim - kafka consumer group.
- **returns**: error - setup error.

#### Close
Closes a component and frees used resources.

> (c [*KafkaMessageQueue]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

> (c [*KafkaMessageQueue]()) Complete(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: error - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*KafkaMessageQueue]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config:**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### EndListen
Ends listening for incoming messages.
When this method is called, [Listen](#listen) unblocks the thread and execution continues.

> (c [*KafkaMessageQueue]()) EndListen(ctx context.Context, context [IContext](../../../components/context/icontext))

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### fromMessage
Returns the content of a message and information about it.

> (c [*KafkaMessageQueue]()) fromMessage(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (*kafka.ProducerMessage, error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: (*kafka.ProducerMessage, error) - content of the message and information about it.


#### GetTopic
Returns the topic.

> (c [*KafkaMessageQueue]()) getTopic() string

- **returns**: string - topic



#### IsOpen
Checks if the component is open.

> (c [*KafkaMessageQueue]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c [*KafkaMessageQueue]()) Listen(ctx context.Context, context [IContext](../../../components/context/icontext), receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error - error or nil if no errors occurred.

#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by Kafka.

> (c [*KafkaMessageQueue]()) MoveToDeadLetter(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: error - error or nil if no errors occurred.

#### OnMessage
Deserializes a message. Then, sends it to a receiver if its set or puts it into the queue.

> (c [*KafkaMessageQueue]()) OnMessage(ctx context.Context, msg [*KafkaMessage](../../connect/kafka_message))

- **ctx**: context.Context - operation context.
- **msg**: [*KafkaMessage](../../connect/kafka_message) - topic

#### Open
Opens the component.

> (c [*KafkaMessageQueue]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.



#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns nil.

> (c [*KafkaMessageQueue]()) Peek(ctx context.Context, context [IContext](../../../components/context/icontext)) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

> (c [*KafkaMessageQueue]()) PeekBatch(ctx context.Context, context [IContext](../../../components/context/icontext), messageCount int64) ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*KafkaMessageQueue]()) ReadMessageCount() (int64, error)

- ***returns**: (int64, error) - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c [*KafkaMessageQueue]()) Receive(ctx context.Context, context [IContext](../../../components/context/icontext), waitTimeout time.Duration) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - received message or nil if nothing was received.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by Kafka.

> (c [*KafkaMessageQueue]()) RenewLock(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: (err error) - error or nil if no errors occurred.

#### Ready
Gets channel with flag.
> (c *KafkaMessageQueue) Ready() chan bool

- **returns**: chan bool - channel with bool flag ready.

#### SetReady
Set new channel for consumer

> (c *KafkaMessageQueue) SetReady(chFlag chan bool)

- **chFlag**: chan bool - channel with ready flag value.

#### Send
Sends a message into the queue.

> (c [*KafkaMessageQueue]()) Send(ctx context.Context, context [IContext](../../../components/context/icontext), envelop [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*KafkaMessageQueue]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### Setup
Setup is run at the beginning of a new session, before ConsumeClaim.

> Setup(session kafka.ConsumerGroupSession) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **returns**: error - setup error.

#### subscribe
Subscribes to a topic.

> (c [*KafkaMessageQueue]()) subscribe(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### toMessage
Creates a new [MessageEnvelope](../../../messaging/queues/message_envelope). 
> (c [*KafkaMessageQueue]()) toMessage(msg [*KafkaMessage](../../connect/kafka_message)) 

- **msg**: [*KafkaMessage](../../connect/kafka_message) - message
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - message 


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*KafkaMessageQueue]()) UnsetReferences(ctx context.Context)

- **ctx**: context.Context - operation context.

### Examples

```go
ctx := context.Context()
queue := NewKafkaMessageQueue("myqueue")
queue.Configure(ctx, cconf.NewConfigParamsFromTuples(
  "subject", "mytopic",
  "connection.protocol", "kafka",
  "connection.host", "localhost",
  "connection.port", 1883,
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

