---
type: docs
title: "MqttConnection"
linkTitle: "MqttConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mqtt-python"
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

> MqttConnection()

### Fields

<span class="hide-title-link">

#### _client_id
The hostname as client id
> **_client_id**: str

#### _connect_timeout
Connection timeout
> **_connect_timeout**: int = 30000

#### _connection
MQTT connection pool object
> **_connection**: mqtt.Client

#### _connection_resolver
Connection resolver
> **_connection_resolver**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### _keep_alive_timeout
Keep alive timeout
> **_keep_alive_timeout**: int = 60000

#### _logger
Logger
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = [CompositeLogger()](../../../components/log/composite_logger)


#### _options
Connection options
> **_options**: [ConfigParams](../../../commons/config/config_params) = [ConfigParams()](../../../commons/config/config_params)


#### _reconnect_timeout
Reconnect timeout
> **_reconnect_timeout**: int = 1000

#### _retry_connect
Retry option
> **_retry_connect**: bool = true

#### _subscriptions
Topic subscriptions
> **_subscriptions**: List[[MqttSubscription](../mqtt_subscription)] = []

</span>


### Instance methods

#### _check_open
Checks if the connection is open.   
Raises an error if the connection is closed.

> _check_open()


#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### create_queue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> create_queue(name: str)

- **name**: str - name of the queue to be created.


#### delete_queue
Deletes a message queue.
If connection doesn't support this function, it exists without error.

> delete_queue(name: str)

- **name**: str - name of the queue to be deleted.


#### get_connection
Gets the connection.
> getConnection(): Any

- **returns**: Any - connection to a MySQL database


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### publish
Publish a message to a specified topic.

> publish(topic: str, data: Any, options: dict)

- **topic**: str - topic name
- **data**: Any - message to be published
- **options**: dict - publishing options


#### read_queue_names
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> read_queue_names(): List[str]

- **returns**: List[str] - queue names.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribes to a topic

> subscribe(topic: str, options: dict, listener: [IMqttMessageListener](../imqtt_message_listener))

- **topic**: str - topic name
- **options**: dict - subscription options
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


#### unsubscribe
Unsubscribes from a previously subscribed topic.

> unsubscribe(topic: str, listener: [IMqttMessageListener](../imqtt_message_listener)

- **topic**: str - topic name
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
