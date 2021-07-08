---
type: docs
title: "MqttMessageQueue"
linkTitle: "MqttMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mqtt-nodex"
description: >
    Message queue that sends and receives messages via MQTT message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

MQTT is a popular light-weight protocol to communicate IoT devices.

#### Configuration parameters

- **topic**: name of MQTT topic to subscribe
- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/interfaces/connect.idiscovery.html IDiscovery]]
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/interfaces/auth.icredentialstore.html ICredentialStore]]
    - **username**: user name
    - **password**: user password
- **options**:
    - **serialize_envelope**: (optional) true to serialize entire message as JSON, false to send only message payload (default: true)
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **qos**: (optional) quality of service level aka QOS (default: 0)
    - **retain**: (optional) retention flag for published messages (default: false)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is log (default: true)
    - **connect_timeout**: (optional) number of milliseconds to wait for connection (default: 30000)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 1000)
    - **keepalive_timeout**: (optional) number of milliseconds to ping broker while inactive (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:mqtt:\*:1.0** - (optional) Shared connection to MQTT service


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string)

- **name**: string - (optional) a queue name.


### Fields

<span class="hide-title-link">

#### _autoSubscribe
TODO: add description
> `protected` **_autoSubscribe**: boolean


#### _connection
The MQTT connection component.
> `protected` **_connection**: any

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)


#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)


#### _options
TODO: add description
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _messages
TODO: add description
> `protected` **_messages**: [MessageEnvelope[]](../../../messaging/queues/message_envelope) = []

#### _qos
TODO: add description
> `protected` **_qos**: number

#### _receiver
TODO: add description
> `protected` **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### _serializeEnvelope
TODO: add description
> `protected` **_serializeEnvelope**: boolean


#### _subscribed
TODO: add description
> `protected` **_subscribed**: boolean

#### _topic
TODO: add description
> `protected` **_topic**: string

</span>


### Instance methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

- Important: This method is not supported by MQTT.

> `public` abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to return.

#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees the used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by MQTT.
> `public` complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to remove.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### endListen
Ends listening for incoming messages.
When this method is call [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### fromMessage
TODO: add description

> `protected` fromMessage(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): any

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description
- **returns**: any - TODO: add description


#### getTopic
TODO: add description

> `protected` getTopic(): string

- **returns**: string - TODO: add description



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> `public` listen(correlationId: string, receiver: [IMessageReceiver](../../../messaging/queues/imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - a receiver to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by MQTT.

> `public` moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to be removed.

#### onMessage
TODO: add description

> `public` onMessage(topic: string, data: any, packet: any): void

- **topic**: string - TODO: add description
- **data**: any - TODO: add description
- **packet**: any - TODO: add description

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue it returns null.

> `public` peek(correlationId: string): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - a peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue it returns an empty list.

- Important: This method is not supported by MQTT.

> `public` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)> - a list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - a number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - a received message or null if nothing was received.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by MQTT.

> `public` renewLock(message: [MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public` send(correlationId: string, message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message envelop to be sent.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
TODO: add description
> `protected` subscribe(correlationId: string): Promise\<void\> 

- **correlationId**: string - TODO: add description


#### toMessage
TODO: add description
> `protected` toMessage(topic: string, data: any, packet: any): [MessageEnvelope](../../../messaging/queues/message_envelope) 

- **topic**: string - TODO: add description
- **data**: any - TODO: add description
- **packet**: any - TODO: add description
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description 


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
let queue = new MqttMessageQueue("myqueue");
queue.configure(ConfigParams.fromTuples(
  "topic", "mytopic",
  "connection.protocol", "mqtt"
  "connection.host", "localhost"
  "connection.port", 1883
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