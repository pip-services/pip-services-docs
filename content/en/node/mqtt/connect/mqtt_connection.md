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

The MqttConnection class allows you to create MQTT connections using the default driver.

#### Configuration parameters

- **client_id**: (optional) name of the client id
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
The hostname as client id
> `protected` **_clientId**: string

#### _connectTimeout
Connection timeout
> `protected` **_connectTimeout**: number = 30000

#### _connection
MQTT connection pool object
> `protected` **_connection**: any

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### _keepAliveTimeout
Keep alive timeout
> `protected` **_keepAliveTimeout**: number = 60000

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)


#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _reconnectTimeout
Reconnect timeout
> `protected` **_reconnectTimeout**: number = 1000

#### _retryConnect
Retry option
> `protected` **_retryConnect**: boolean = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: [MqttSubscription[]](../mqtt_subscription) = []

</span>


### Instance methods

#### checkOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> `protected` checkOpen(): void


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### createQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> `public` createQueue(name: string): Promise\<void\>

- **name**: string - name of the queue to be created.


#### deleteQueue
Deletes a message queue.
If connection doesn't support this function, it exists without error.

> `public` deleteQueue(name: string): Promise\<void\>

- **name**: string - name of the queue to be deleted.


#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a MySQL database


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### publish
Publish a message to a specified topic.

> `public` publish(topic: string, data: Buffer, options: any): Promise\<void\>

- **topic**: string - topic name
- **data**: Buffer - message to be published
- **options**: any - publishing options


#### readQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> `public` readQueueNames(): Promise\<string[]\>

- **returns**: Promise\<string[]\> - queue names.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribes to a topic

> `public` subscribe(topic: string, options: any, listener: [IMqttMessageListener](../imqtt_message_listener)): Promise\<void\>

- **topic**: string - topic name
- **options**: any - subscription options
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


#### unsubscribe
Unsubscribes from a previously subscribed topic.

> `public` unsubscribe(topic: string, listener: [IMqttMessageListener](../imqtt_message_listener): Promise\<void\>

- **topic**: string - topic name
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
