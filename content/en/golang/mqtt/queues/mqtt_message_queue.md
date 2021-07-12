---
type: docs
title: "MqttMessageQueue"
linkTitle: "MqttMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-mqtt-go"
description: >
    Message queue that sends and receives messages via an MQTT message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)


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

#### NewMqttMessageQueue
Creates a new instance of the message queue.

> NewMqttMessageQueue(name string) [*MqttMessageQueue]()

- **name**: string - (optional) queue's name.


### Fields

<span class="hide-title-link">

#### optionsResolver
Connection resolver
> **optionsResolver**: [MqttConnectionResolver](../../connect/mqtt_connection_resolver)

#### messages
Message
> **messages**: [[]MessageEnvelope](../../../messaging/queues/message_envelope)

#### receiver
Message receiver
> **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)


#### subscribed
Subscribe option
> **subscribed**: bool

#### topic
Topic
> **topic**: string

</span>


### Instance methods

#### Abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

- Important: This method is not supported by MQTT.

> (c *MqttMessageQueue) Abandon(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: (err error) - error or nil no errors occured.

#### Clear
Clears a component's state.

> (c *MqttMessageQueue) Clear(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.

#### Close
Closes a component and frees used resources.

> (c *MqttMessageQueue) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by MQTT.

> (c *MqttMessageQueue) Complete(message *msgqueues.MessageEnvelope) (err error)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: (err error) - error or nil no errors occured.


#### EndListen
Ends listening for incoming messages.
When this method is call, [Listen](#listen) unblocks the thread and execution continues.

> (c *MqttMessageQueue) EndListen(correlationId string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### FromMessage!
**TODO: method is not implemented**


Returns the topic and the data of a message.

> `protected` fromMessage(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): any

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: any - topic and data


#### GetTopic!
**TODO: method is not implemented**


Obtains the topic.

> `protected` getTopic(): string

- **returns**: string - topic



#### IsOpen
Checks if the component is open.

> (c *MqttMessageQueue) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c *MqttMessageQueue) Listen(correlationId string, receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by MQTT.

> (c *MqttMessageQueue) MoveToDeadLetter(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: (err error) - error or nil no errors occured.

#### OnMessage!
**TODO: method is not implemented**


Checks if the message comes from the right topic. If this is the case, deserializes and sends it to the receiver if it's set. Otherwise, puts it into the queue.

> `public` onMessage(topic: string, data: any, packet: any): void

- **topic**: string - topic
- **data**: any - data
- **packet**: any - packet

#### OpenWithParams
Opens the component with given connection and credential parameters.

> (c *MqttMessageQueue) OpenWithParams(correlationId string, connection *ccon.ConnectionParams, credential *cauth.CredentialParams) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connection**: [*ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: (err error) - error or nil no errors occured.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> (c *MqttMessageQueue) Peek(correlationId string) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by MQTT.

> (c *MqttMessageQueue) PeekBatch(correlationId string, messageCount int64) (result [[]MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: (result [[]MessageEnvelope](../../../messaging/queues/message_envelope), err error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c *MqttMessageQueue) ReadMessageCount() (count int64, err error)

- ***returns**: (count int64, err error)> - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c *MqttMessageQueue) Receive(correlationId string, waitTimeout time.Duration) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - received message or null if nothing was received.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by MQTT.

> (c *MqttMessageQueue) RenewLock(message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: (err error) - error or nil no errors occured.

#### Send
Sends a message into the queue.

> (c *MqttMessageQueue) Send(correlationId string, envelop [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **envelop**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: (err error) - error or nil no errors occured.


#### Subscribe
Subscribes to a topic.
> (c *MqttMessageQueue) Subscribe()


#### ToMessage
If the message has no data, it returns null. Otherwise, it returns the message.

> (c *MqttMessageQueue) toMessage(msg mqtt.Message) [MessageEnvelope](../../../messaging/queues/message_envelope)

- **msg**: mqtt.Message - MQTT message with data and topic
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - null if the message has no data. Otherwise, it returns the message.


### Examples

```go
queue := NewMqttMessageQueue("myqueue")
queue.Configure(cconf.NewConfigParamsFromTuples(
  "topic", "mytopic",
  "connection.protocol", "mqtt"
  "connection.host", "localhost"
  "connection.port", 1883
))

queue.open("123")
queue.Send("123", NewMessageEnvelope("", "mymessage", "ABC"))
message, err := queue.Receive("123")

if (message != nil) {
   ...
   queue.Complete("123", message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
