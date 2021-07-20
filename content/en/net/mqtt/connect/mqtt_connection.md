---
type: docs
title: "MqttConnection"
linkTitle: "MqttConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mqtt-dotnet"
description: >
    MQTT connection using the default driver.

---

**Inherits:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The MqttConnection class allows you to create MQTT connections using the default driver.

**Important points**

By defining a connection and sharing it through multiple message queues you can reduce the number of used connections.

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
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
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

> `public` MqttConnection()

### Fields

<span class="hide-title-link">

#### _clientId
The hostname as client id
> `protected` **_clientId**: string

#### _connectTimeout
Connection timeout
> `protected` **_connectTimeout**: int = 30000

#### _connection
MQTT connection pool object
> `protected` **_connection**: IMqttClient

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### _keepAliveTimeout
Keep alive timeout
> `protected` **_keepAliveTimeout**: int = 60000

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)


#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _reconnectTimeout
Reconnect timeout
> `protected` **_reconnectTimeout**: int = 1000

#### _retryConnect
Retry option
> `protected` **_retryConnect**: bool = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: List<[MqttSubscription](../mqtt_subscription)> = new List<[MqttSubscription](../mqtt_subscription)>()

</span>


### Instance methods

#### CheckOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> `private` void CheckOpen()


#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### CreateQueueAsync
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> `public` Task CreateQueueAsync(string name)

- **name**: string - name of the queue to be created.


#### DeleteQueueAsync
Deletes a message queue.
If the connection doesn't support this function, it exists without error.

> `public` Task DeleteQueueAsync(string name)

- **name**: string - name of the queue to be deleted.


#### GetConnection
Gets the connection.
> `public` IMqttClient GetConnection()

- **returns**: IMqttClient - connection to an MQTT broker. 


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### PublishAsync
Publish a message to a specified topic.

> `public` Task PublishAsync(string topic, MqttApplicationMessage message)

- **topic**: string - topic name
- **message**: MqttApplicationMessage - message to be published


#### ReadQueueNamesAsync
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> `public` Task\<List\<string\>\> ReadQueueNamesAsync()

- **returns**: Task\<List\<string\>\> - queue names.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### SubscribeAsync
Subscribes to a topic

> `public` Task SubscribeAsync(string topic, MqttQualityOfServiceLevel qos, [IMqttMessageListener](../imqtt_message_listener) listener)

- **topic**: string - topic name
- **qos**: MqttQualityOfServiceLevel - quality of service level
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


#### UnsubscribeAsync
Unsubscribes from a previously subscribed topic.

> `public` Task UnsubscribeAsync(string topic, [IMqttMessageListener](../imqtt_message_listener) listener)

- **topic**: string - topic name
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
