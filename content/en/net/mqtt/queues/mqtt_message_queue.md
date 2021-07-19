---
type: docs
title: "MqttMessageQueue"
linkTitle: "MqttMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mqtt-dotnet"
description: >
    Message queue that sends and receives messages via an MQTT message broker.
    
---

**Inherits:** [CachedMessageQueue](../../../messaging/queues/cached_message_queue), [IMqttMessageListener](../../connect/imqtt_message_listener)


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

> `public` MqttMessageQueue(string name = null)

- **name**: string - (optional) queue's name.


### Fields

<span class="hide-title-link">

#### _connection
MQTT connection component
> `private` **_connection**: [MqttConnection](../../connect/mqtt_connection)

#### _dependencyResolver
Dependency resolver
> `private` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _qos
Quality of service
> `private` **_qos**: int


#### _serializeEnvelope
Serialization option
> `private` **_serializeEnvelope**: bool


#### _subscribed
Subscribe option
> `private` **_subscribed**: bool

#### _topic
Topic
> `private` **_topic**: string

</span>


### Instance methods

#### AbandonAsync
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment, 
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

- Important: This method is not supported by MQTT.

> `public override` Task AbandonAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

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

- Important: This method is not supported by MQTT.
> `public override` Task CompleteAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### EndListen!
**Note: this method is not implemented**

Ends listening for incoming messages.
When this method is called, [Listen](#listen) unblocks the thread and execution continues.

#### FromMessage
Returns the topic and the data of a message.

> `private` MqttApplicationMessage FromMessage([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: MqttApplicationMessage - topic and data


#### GetTopic
Obtains the topic.

> `private` string GetTopic()

- **returns**: string - topic

#### Listen!
**Note: this method is not implemented**

Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)


#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### MoveToDeadLetterAsync
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by MQTT.

> `public override` async Task MoveToDeadLetterAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### OnMessage
Checks if the message comes from the right topic. If this is the case, it deserializes and sends the message to the receiver if it's set. Otherwise, puts it into the queue.

> `public` void OnMessage(MqttApplicationMessage msg)

- **msg**: MqttApplicationMessage - message

#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Peek!
**Note: this method is not implemented**

Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.


#### PeekBatch!
**Note: this method is not implemented**

Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by MQTT.



#### ReadMessageCount!
**Note: this method is not implemented**

Reads the current number of messages in the queue to be delivered.


#### Receive!
**Note: this method is not implemented**

Receives an incoming message and removes it from the queue.


#### RenewLockAsync
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by MQTT.

> `public override` Task RenewLockAsync([MessageEnvelope](../../../messaging/queues/message_envelope message, long lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### SendAsync
Sends a message into the queue.

> `public override` Task SendAsync(string correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### SubscribeAsync
Subscribes to a topic.
> `protected override` Task SubscribeAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### ToMessage
If the message has no data, it returns null. Otherwise, it returns the message.

> `private` [MessageEnvelope](../../../messaging/queues/message_envelope) ToMessage(MqttApplicationMessage msg)

- **msg**: MqttApplicationMessage - message
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - Null if the message has no data. Otherwise, it returns the message.


#### UnsetReferences!
**Note: this method is not implemented**

Unsets (clears) previously set references to dependent components.


### Examples

```cs
var queue = new MqttMessageQueue("myqueue");
queue.Configure(ConfigParams.FromTuples(
  "subject", "mytopic",
  "connection.protocol", "mqtt"
  "connection.host", "localhost"
  "connection.port", 1883
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
