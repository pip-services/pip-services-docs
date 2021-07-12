---
type: docs
title: "KafkaMessageQueue"
linkTitle: "KafkaMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-kafka-dotnet"
description: >
    Message queue that sends and receives messages via the Kafka message broker.
    
---

**Inherits:** [CachedMessageQueue](../../../messaging/queues/cached_message_queue), [IKafkaMessageListener](../../connect/ikafka_message_listener)


### Description
The KafkaMessageQueue class allows you to create message queues that send and receive messages via the Kafka message broker.

#### Configuration parameters

- **topic**: name of Kafka topic to subscribe
- **group_id**: (optional) consumer group id (default: default)
- **from_beginning**: (optional) restarts receiving messages from the beginning (default: false)
- **read_partitions**: (optional) number of partitions to be consumed concurrently (default: 1)
- **autocommit**: (optional) turns on/off autocommit (default: true)
- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from  [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from  [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: user name
    - **password**: user password
- **options**:
    - **autosubscribe**:        (optional) true to automatically subscribe on option(default: false)
    - **acks**: (optional) control the number of required acks: -1 - all, 0 - none, 1 - only leader (default: -1)
    - **autocommit_timeout**: (optional) number of milliseconds to perform autocommit offsets (default: 1000)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on broker request (default: 30000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:kafka:\*:1.0** - (optional) shared connection to Kafka service


### Constructors
Creates a new instance of the message queue.

> `public` KafkaMessageQueue(string name = null)

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">

#### _autoCommit
Autocommit option
> `private` **_autoCommit**: bool

#### _connection
Kafka connection component.
> `private` **_connection**: [KafkaConnection](../../connect/kafka_connection)


#### _dependencyResolver
Dependency resolver.
> `private` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver/)

#### _fromBeginning
From beginning (Subscribe option)
> `private` **_fromBeginning**: bool

#### _groupId
Group id
> `private` **_groupId**: string = 'default'


#### _readPartitions
Partition
> `private` **_readPartitions**: int

#### _subscribed
Option to subscribe
> `private` **_subscribed**: bool

#### _topic
Topic
> `private` **_topic**: string

</span>


### Instance methods

#### AbandonAsync
Returns a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and sent to dead letter queue.

- Important: This method is not supported by Kafka.

> `public override` async Task AbandonAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### Clear!
**TODO: this method is not implemented**

Clears a component's state.


#### CloseAsync
Closes a component and frees used resources.

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### CompleteAsync
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by Kafka.

> `public override` Task CompleteAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### EndListen!
**TODO: this method is not implemented**

Ends listening for incoming messages.
When this method is call, [Listen](#listen) unblocks the thread and execution continues.


#### FromMessage
Returns the content of a message and information about it.

> `private` Message\<byte[], byte[]\> FromMessage([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: Message\<byte[], byte[]\> - content of the message and information about it.


#### GetTopic
Returns the topic.

> `private` string GetTopic()

- **returns**: string - topic



#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Listen!
**TODO: this method is not implemented**

Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)


#### MoveToDeadLetterAsync
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by Kafka.

> `public override` Task MoveToDeadLetterAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### OnMessage
Deserializes a message. Then, sends it to a receiver if its set or puts it into the queue.

> `public` void OnMessage([KafkaMessage](../../connect/kafka_message) msg)

- **msg**: [KafkaMessage](../../connect/kafka_message) - message

#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Peek!
**TODO: this method is not implemented**

Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

#### PeekBatch!
**TODO: this method is not implemented**

Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by Kafka.


#### ReadMessageCount!
**TODO: this method is not implemented**

Reads the current number of messages in the queue to be delivered.


#### Receive!
**TODO: this method is not implemented**

Receives an incoming message and removes it from the queue.


#### RenewLockAsync
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by Kafka.

> `public override` Task RenewLockAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### SendAsync
Sends a message into the queue.

> `public override` async Task SendAsync(string correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### SubscribeAsync
Subscribes to a topic.
> `protected override` Task SubscribeAsync(string correlationId)

- **correlationId**: (optional) transaction id used to trace execution through the call chain.


#### ToMessage
Creates a new [MessageEnvelope](../../../messaging/queues/message_envelope). 
> `private` [MessageEnvelope](../../../messaging/queues/message_envelope) ToMessage([KafkaMessage](../../connect/kafka_message) msg)

- **msg**: [KafkaMessage](../../connect/kafka_message) - message
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message 


#### UnsetReferences!
**TODO: this method is not implemented**

Unsets (clears) previously set references to dependent components.


### Examples

```cs
var queue = new KafkaMessageQueue("myqueue");
queue.Configure(ConfigParams.FromTuples(
  "subject", "mytopic",
  "connection.protocol", "tcp"
  "connection.host", "localhost"
  "connection.port", 9092
));

await queue.OpenAsync("123");
await queue.SendAsync("123", new MessageEnvelope("", "mymessage", "ABC"));
var message = await queue.ReceiveAsync("123");

if (message != null) {
    ...
    await queue.CompleteAsync("123", message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
