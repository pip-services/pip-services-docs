---
type: docs
title: "KafkaMessageQueue"
linkTitle: "KafkaMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-kafka-nodex"
description: >
    Message queue that sends and receives messages via the Kafka message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The KafkaMessageQueue class allows you to create message queues that send and receive messages via the Kafka message broker.

#### Configuration parameters

- **topic**: name of Kafka topic to subscribe
- **group_id**: (optional) consumer group id (default: default)
- **from_beginning**: (optional) restarts receiving messages from the beginning (default: false)
- **read_partitions**: (optional) number of partitions to be consumed concurrently (default: 1)
- **autocommit**: (optional) turns on/off autocommit (default: true)
- **connection**(s):
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **acks**: (optional) control the number of required acks: -1 - all, 0 - none, 1 - only leader (default: -1)
    - **log_level**: (optional) log level 0 - None, 1 - Error, 2 - Warn, 3 - Info, 4 - Debug (default: 1)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:kafka:\*:1.0** - (optional) shared connection to Kafka service


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string)

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">


#### _acks
Acknowledgements
> `protected` **_acks**: number = -1

#### _autoCommit
Autocommit option
> `protected` **_autoCommit**: boolean = true

#### _autoSubscribe
Autosubscribe option
> `protected` **_autoSubscribe**: boolean

#### _connection
Kafka connection component.
> `protected` **_connection**: [KafkaConnection](../../connect/kafka_connection)


#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver/)

#### _fromBeginning
From beginning (Subscribe option)
> `protected` **_fromBeginning**: boolean

#### _groupId
Group id
> `protected` **_groupId**: string

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)


#### _messages
Messages
> `protected` **_messages**: [MessageEnvelope[]](../../../messaging/queues/message_envelope)

#### _readPartitions
Partition
> `protected` **_readPartitions**: number = 1

#### _receiver
Message receiver
> `protected` **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### _subscribed
Option to subscribe
> `protected` **_subscribed**: boolean

#### _topic
Topic
> `protected` **_topic**: string

</span>


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and sent to dead letter queue.

- Important: This method is not supported by Kafka.

> `public` abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by Kafka.
> `public` complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### fromMessage
Returns the content of a message and information about it.

> `protected` fromMessage(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): any

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: any - content of the message and information about it.


#### getTopic
Returns the topic.

> `protected` getTopic(): string

- **returns**: string - topic



#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> `public` listen(correlationId: string, receiver: [IMessageReceiver](../../../messaging/queues/imessage_receiver)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by Kafka.

> `public` moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### onMessage
Deserializes a message. Then, sends it to a receiver if its set or puts it into the queue.

> `public` onMessage(topic: string, partition: number, msg: any): Promise\<void\>

- **topic**: string - topic
- **partition**: number - partition number
- **msg**: any - message

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> `public` peek(correlationId: string): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by Kafka.

> `public` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by Kafka.

> `public` renewLock(message: [MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: number - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public` send(correlationId: string, message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribes to a topic.
> `protected` subscribe(correlationId: string): Promise\<void\> 

- **correlationId**: (optional) transaction id used to trace execution through the call chain.


#### toMessage
Creates a new [MessageEnvelope](../../../messaging/queues/message_envelope). 
> `protected` toMessage(msg: any): [MessageEnvelope](../../../messaging/queues/message_envelope) 

- **msg**: any - message
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message 


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
let queue = new KafkaMessageQueue("myqueue");
queue.configure(ConfigParams.fromTuples(
  "topic", "mytopic",
  "connection.protocol", "tcp"
  "connection.host", "localhost"
  "connection.port", 9092
));

queue.open("123", (err) => {
    ...
});

queue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));
queue.receive("123", (err, message) => {
    if (message != null) {
       ...
       queue.complete("123", message);
    }
});
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
