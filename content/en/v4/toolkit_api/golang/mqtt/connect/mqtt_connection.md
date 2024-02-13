---
type: docs
title: "MqttConnection"
linkTitle: "MqttConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mqtt-go"
description: >
    MQTT connection using the default driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The MqttConnection class allows you to create MQTT connections using the default driver.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **connect_timeout**: (optional) number of milliseconds to wait for connection (default: 30000)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 1000)
    - **keepalive_timeout**: (optional) number of milliseconds to ping broker while inactive (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters][ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors

#### NewMqttConnection
Creates a new instance of the connection component.

> NewMqttConnection() [*MqttConnection]()

### Fields

<span class="hide-title-link">

#### clientId
Hostname as client id
> **clientId**: string

#### connectTimeout
Connection timeout
> **connectTimeout**: int

#### Connection
MQTT connection pool object
> **Connection**: mqtt.Client

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### keepAliveTimeout
Keep alive timeout
> **keepAliveTimeout**: int = 60000

#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Options
Connection options
> **Options**: [*ConfigParams](../../../components/config/config_params)


#### reconnectTimeout
Reconnect timeout
> **reconnectTimeout**: int

#### retryConnect
Retry option
> **retryConnect**: bool

#### subscriptions
Topic subscriptions
> **subscriptions**: [[]*MqttSubscription](../mqtt_subscription)

</span>


### Methods

#### checkOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> (c [*MqttConnection]()) checkOpen() error
- **returns**: error - error or nil if no errors occurred.


#### Close
Closes a component and frees used resources.

> (c [*MqttConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*MqttConnection]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### CreateQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*MqttConnection]()) CreateQueue() error

- **name**: string - name of the queue to be created.
- **returns**: error - error or nil no errors occured.

#### DeleteQueue
Deletes a message queue.
If connection doesn't support this function, it exists without error.

> (c [*MqttConnection]()) DeleteQueue() error

- **name**: string - name of the queue to be deleted.
- **returns**: error - error or nil if no errors occurred.

#### GetConnection
Gets the connection.
> (c [*MqttConnection]()) GetConnection() mqtt.Client

- **returns**: mqtt.Client - connection to an MQTT broker.


#### IsOpen
Checks if the component is open.

> (c [*MqttConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*MqttConnection]()) Open(context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Publish
Publishes a message to a specified topic.

> (c [*MqttConnection]()) Publish(ctx context.Context, topic string, qos byte, retained bool, data []byte) error

- **ctx**: context.Context - operation context.
- **topic**: string - topic name
- **qos**: Buffer - quality of service (QOS) for the message
- **retained**: bool - retained flag for the message
- **data**: []byte - message to be published
- **returns**: error - error or nil if no errors occurred.


#### ReadQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> (c [*MqttConnection]()) ReadQueueNames() ([]string, error)

- **returns**: ([]string, error) - queue names.


#### SetReferences
Sets references to dependent components.

> (c [*MqttConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### Subscribe
Subscribes to a topic

> (c [*MqttConnection]()) Subscribe(ctx context.Context, topic string, qos byte, listener [IMqttMessageListener](../imqtt_message_listener)) error

- **ctx**: context.Context - operation context.
- **topic**: string - name of the topic
- **qos**: byte - quality of service (QOS) for the subscription
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener
- **returns**: error - error or nil if no errors occurred.

#### Unsubscribe
Unsubscribes from a previously subscribed topic.

> (c [*MqttConnection]()) Unsubscribe(ctx context.Context, topic string, listener [IMqttMessageListener](../imqtt_message_listener)) error

- **ctx**: context.Context - operation context.
- **topic**: string - name of the topic
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener
- **returns**: error - error or nil if no errors occurred.


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)

