---
type: docs
title: "MqttMessageQueue"
linkTitle: "MqttMessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mqtt-python"
description: >
    Message queue that sends and receives messages via an MQTT message broker.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue), [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The MqttMessageQueue class allows you to create message queues that send and receive messages via an MQTT message broker.


#### Configuration parameters

- **topic**: name of MQTT topic to subscribe
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **serialize_envelope**: (optional) true to serialize entire message as JSON, false to send only message payload (default: true)
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **qos**: (optional) quality of service level aka QOS (default: 0)
    - **retain**: (optional) retention flag for published messages (default: false)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **connect_timeout**: (optional) number of milliseconds to wait for connection (default: 30000)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 1000)
    - **keepalive_timeout**: (optional) number of milliseconds to ping the broker while inactive (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:mqtt:\*:1.0** - (optional) shared connection to MQTT service


### Constructors
Creates a new instance of the message queue.

> MqttMessageQueue(name: str = None)

- **name**: str - (optional) queue's name.


### Fields

<span class="hide-title-link">

#### _auto_subscribe
Auto-subscribe option
> **_auto_subscribe**: bool


#### _connection
MQTT connection component
> **_connection**: [MqttConnection](../../mqtt_connection)

#### _dependency_resolver
Dependency resolver
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)


#### _logger
Logger
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = [CompositeLogger()](../../../components/log/composite_logger)


#### _options
Configuration options
> **_options**: [ConfigParams](../../../commons/config/config_params) = [ConfigParams()](../../../commons/config/config_params)


#### _messages
Message
> **_messages**: List[[MessageEnvelope](../../../messaging/queues/message_envelope)] = []

#### _qos
Quality of service
> **_qos**: int

#### _receiver
Message receiver
> **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### _serialize_envelope
Serialization option
> **_serialize_envelope**: bool


#### _subscribed
Subscribe option
> **_subscribed**: bool

#### _topic
Topic
> **_topic**: str

</span>


### Instance methods

#### abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

- Important: This method is not supported by MQTT.

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

- Important: This method is not supported by MQTT.

> complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### end_listen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> end_listen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _from_message
Returns the topic and the data of a message.

> _from_message(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Optional[dict]

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: Optional[dict] - topic and data


#### _get_topic
Obtains the topic.

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

- Important: This method is not supported by MQTT.

> moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope))

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### on_message
Checks if the message comes from the right topic. If this is the case, deserializes and sends it to the receiver if it's set. Otherwise, puts it into the queue.

> on_message(topic: str, data: Any, packet: Any)

- **topic**: str - topic
- **data**: Any - data
- **packet**: Any - packet

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> peek(correlation_id: Optional[str]): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peek_batch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by MQTT.

> peek_batch(correlation_id: Optional[str], message_count: int): List[[MessageEnvelope](../../../messaging/queues/message_envelope)]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **message_count**: int - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)> - list with peeked messages.

#### read_message_count
Reads the current number of messages in the queue to be delivered.

> read_message_count(): int

- ***returns**: int - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> receive(correlation_id: Optional[str], waitTimeout: int): [MessageEnvelope](../../../messaging/queues/message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - received message or null if nothing was received.

#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by MQTT.

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

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### subscribe
Subscribes to a topic.
> subscribe(correlation_id: Optional[str]) 

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### to_message
If the message is null, it returns null. Otherwise, it returns the message.

> to_message(topic: str, data: Any, packet: Any): [MessageEnvelope](../../../messaging/queues/message_envelope) 

- **topic**: str - topic
- **data**: Any - data
- **packet**: Any - packet
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - Null if the message has no data. Otherwise, it returns the message.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()

### Examples

```python
queue = MqttMessageQueue("myqueue")
queue.configure(ConfigParams.from_tuples(
    "topic", "mytopic",
    'connection.protocol', 'mqtt',
    "connection.host", "localhost",
    "connection.port", 1883
))

queue.open("123")
queue.send("123", MessageEnvelope(None, "mymessage", "ABC"))
message = queue.receive("123", 10000)
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
