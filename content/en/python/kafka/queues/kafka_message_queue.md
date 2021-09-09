---
type: docs
title: "KafkaMessageQueue"
linkTitle: "KafkaMessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-kafka-python"
description: >
    Message queue that sends and receives messages via the Kafka message broker.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue), [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

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

> KafkaMessageQueue(name: str = None)

- **name**: str - (optional) queue name.


### Fields

<span class="hide-title-link">


#### _acks
Acknowledgements
> **_acks**: int = -1

#### _auto_commit
Autocommit option
> **_auto_commit**: bool = true

#### _auto_subscribe
Autosubscribe option
> **_auto_subscribe**: bool

#### _connection
Kafka connection component.
> **_connection**: [KafkaConnection](../../connect/kafka_connection)


#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver/)

#### _group_id
Group id
> **_group_id**: str

#### _logger
Logger
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)


#### _messages
Messages
> **_messages**: [MessageEnvelope[]](../../../messaging/queues/message_envelope)

#### _read_rartitions
Partition
> **_read_rartitions**: int = 1

#### _receiver
Message receiver
> **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### _subscribed
Option to subscribe
> **_subscribed**: bool

#### _topic
Topic
> **_topic**: str

</span>


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and sent to dead letter queue.

> abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

> complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> endListen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _from_message
Returns the content of a message and information about it.

> _from_message(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Optional[bytes]

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: Optional[bytes] - content of the message and information about it.


#### _get_topic
Returns the topic.

> _get_topic(): str

- **returns**: str - topic



#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../../../messaging/queues/imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### move_to_dead_letter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by Kafka.

> move_to_dead_letter(message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### on_message
Deserializes a message. Then, sends it to a receiver if its set or puts it into the queue.

> on_message(topic: str, partition: int, msg: Any)

- **topic**: str - topic
- **partition**: int - partition number
- **msg**: Any - message

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> peek(correlation_id: Optional[str]): [MessageEnvelope](../../../messaging/queues/message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - peeked message.

#### peek_batch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

> peek_batch(correlation_id: Optional[str], messageCount: number): List[[MessageEnvelope](../../../messaging/queues/message_envelope)]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../../../messaging/queues/message_envelope)] - list with peeked messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> read_message_count(): int

- ***returns**: int - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> receive(correlation_id: Optional[str], waitTimeout: number): [MessageEnvelope](../../../messaging/queues/message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - received message or null if nothing was received.

#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by Kafka.

> renew_lock(message: [MessageEnvelope](../../../messaging/queues/message_envelope), lock_timeout: int)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lock_timeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> send(correlation_id: Optional[str], message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### _subscribe
Subscribes to a topic.
> _subscribe(correlation_id: Optional[str]) 

- **correlation_id**: (optional) transaction id used to trace execution through the call chain.


#### _to_message
Creates a new [MessageEnvelope](../../../messaging/queues/message_envelope). 
> _to_message(msg: bytes): Optional[[MessageEnvelope](../../../messaging/queues/message_envelope)]

- **msg**: bytes - message
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message 


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()

### Examples

```python
 queue = KafkaMessageQueue("myqueue")

 queue.configure(ConfigParams.from_tuples(
   "topic", "mytopic",
   "connection.protocol", "tcp"
   "connection.host", "localhost"
   "connection.port", 9092
 ))

 queue.open("123")
 queue.send("123", MessageEnvelope(None, "mymessage", "ABC"))
 queue.receive("123")

 if message is not None:
     ...
     queue.complete("123", message)
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
