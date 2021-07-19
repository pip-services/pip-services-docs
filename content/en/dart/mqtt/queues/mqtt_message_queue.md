---
type: docs
title: "MqttMessageQueue"
linkTitle: "MqttMessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-mqtt-dart"
description: >
    Message queue that sends and receives messages via an MQTT message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The MqttMessageQueue class allows you to create message queues that send and receive messages via an MQTT message broker.


#### Configuration parameters

- **topic**: name of MQTT topic to subscribe
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](https://pip-services3-nodex.github.io/pip-services3-components-nodex/interfaces/connect.idiscovery.html)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](https://pip-services3-nodex.github.io/pip-services3-components-nodex/interfaces/auth.icredentialstore.html)
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

> MqttMessageQueue([String name])

- **name**: String - (optional) queue's name.


### Fields

<span class="hide-title-link">

#### _optionsResolver
Configuration options
> **_optionsResolver**: [ConfigParams](../../connect/mqtt_connection_resolver)


#### _messages
Message
> **_messages**: List<[MessageEnvelope](../../../messaging/queues/message_envelope)>

#### _qos
Quality of service
> **_qos**: MqttQos.atMostOnce

#### _receiver
Message receiver
> **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)


#### _subscribed
Subscribe option
> **_subscribed**: bool = false

#### _topic
Topic
> **_topic**: String

</span>


### Instance methods

#### abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

- Important: This method is not supported by MQTT.

`@override`
> Future abandon([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

`@override`
> Future clear(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by MQTT.

`@override`
> Future complete([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

`@override`
> void endListen(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

`@override`
> void listen(String correlationId, [IMessageReceiver](../../../messaging/queues/imessage_receiver) receiver)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by MQTT.

`@override`
> Future moveToDeadLetter([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### openWithParams
Opens the component.

`@override`
> Future openWithParams(String correlationId, [ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **connection**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: Future - that receives null no errors occured.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

`@override`
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> peek(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by MQTT.

`@override`
> Future\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> peekBatch(String correlationId, int messageCount)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

`@override`
> Future\<int\> readMessageCount()

- ***returns**: Future\<int\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

`@override`
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> receive(String correlationId, int waitTimeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by MQTT.

`@override`
> Future renewLock([MessageEnvelope](../../../messaging/queues/message_envelope message, int lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

`@override`
> Future send(String correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) envelop)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.


#### subscribe
Subscribes to a topic.
> void subscribe()


### Examples

```dart
var queue = MqttMessageQueue('myqueue');
queue.configure(ConfigParams.fromTuples([
  'topic', 'mytopic',
  'connection.protocol', 'mqtt'
  'connection.host', 'localhost'
  'connection.port', 1883
]));

await queue.open('123');
    ...
await queue.send('123', MessageEnvelope(null, 'mymessage', 'ABC'));

var message await = queue.receive('123')

if (message != null) {
   ...
   await queue.complete('123', message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
