---
type: docs
title: "MqttConnection"
linkTitle: "MqttConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mqtt-nodex"
description: >
    MQTT connection using the default driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

MQTT is a popular light-weight protocol to communicate IoT devices.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: user name
    - **password**: user password
- **options**:
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is log (default: true)
    - **connect_timeout**: (optional) number of milliseconds to wait for connection (default: 30000)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 1000)
    - **keepalive_timeout**: (optional) number of milliseconds to ping broker while inactive (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters][ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor()

### Fields

<span class="hide-title-link">

#### _clientId
The hostname as client id.
> `protected` **_clientId**: string

#### _connectTimeout
TODO: add description
> `protected` **_connectTimeout**: number = 30000

#### _connection
The MQTT connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### _keepAliveTimeout
TODO: add description
> `protected` **_keepAliveTimeout**: number = 60000

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)


#### _options
TODO: add description
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _reconnectTimeout
TODO: add description
> `protected` **_reconnectTimeout**: number = 1000

#### _retryConnect
TODO: add description
> `protected` **_retryConnect**: boolean = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: [MqttSubscription[]](../mqtt_subscription) = []

</span>


### Instance methods

#### checkOpen
Checks if connection is open.   
Raise an error is connection is closed.

> `protected` checkOpen(): void


#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### createQueue
Creates a message queue.
If connection doesn't support this function it exists without error.

> `public` createQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be created.


#### deleteQueue
Deletes a message queue.
If connection doesn't support this function it exists without error.

> `public` deleteQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be deleted.


#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a MySQL database


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### publish
Publish a message to a specified topic

> `public` publish(topic: string, data: Buffer, options: any): Promise\<void\>

- **topic**: string - a topic name
- **data**: Buffer - a message to be published
- **options**: any - publishing options


#### readQueueNames
Reads a list of registered queue names.
If connection doesn't support this function returnes an empty list.

> `public` readQueueNames(): Promise\<string[]\>

- **returns**: Promise\<string[]\> - queue names.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribe to a topic

> `public` subscribe(topic: string, options: any, listener: [IMqttMessageListener](../imqtt_message_listener)): Promise\<void\>

- **topic**: string - a topic name
- **options**: any - subscription options
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - a message listener


#### unsubscribe
Unsubscribe from a previously subscribed topic

> `public` unsubscribe(topic: string, listener: [IMqttMessageListener](../imqtt_message_listener): Promise\<void\>

- **topic**: string - a topic name
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - a message listener


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
