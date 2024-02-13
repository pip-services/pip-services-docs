---
type: docs
title: "MqttConnection"
linkTitle: "MqttConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-prometheus-dart"
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
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is log (default: true)
    - **connect_timeout**: (optional) number of milliseconds to wait for connection (default: 30000)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 1000)
    - **keepalive_timeout**: (optional) number of milliseconds to ping broker while inactive (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> MqttConnection()

### Fields

<span class="hide-title-link">

#### clientId_
The hostname as client id
> **clientId_**: String

#### connectTimeout_
Connection timeout
> **connectTimeout_**: int = 30000

#### connection_
MQTT connection pool object
> **connection_**: mqtt.MqttServerClient?

#### connectionResolver_
Connection resolver
> **connectionResolver_**: [MqttConnectionResolver](../mqtt_connection_resolver)

#### keepAliveTimeout_
Keep alive timeout
> **keepAliveTimeout_**: int = 60000

#### logger_
Logger
> **logger_**: [CompositeLogger](../../../components/log/composite_logger) = [CompositeLogger()](../../../components/log/composite_logger)


#### options_
Connection options
> **options_**: [ConfigParams](../../../components/config/config_params) = [ConfigParams()](../../../components/config/config_params)


#### reconnectTimeout_
Reconnect timeout
> **reconnectTimeout_**: int = 1000

#### retryConnect_
Retry option
> **retryConnect_**: bool = true

#### subscriptions_
Topic subscriptions
> **subscriptions_**: List<[MqttSubscription](../mqtt_subscription)>

</span>


### Instance methods

#### checkOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> void checkOpen()


#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.
`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### createQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

`@override`
> Future\<void\> createQueue(String name)

- **name**: String - name of the queue to be created.


#### deleteQueue
Deletes a message queue.
If connection doesn't support this function, it exists without error.

`@override`
> Future\<void\> deleteQueue(String name)

- **name**: String - name of the queue to be deleted.


#### getConnection
Gets the connection.
> mqtt.MqttServerClient? getConnection()

- **returns**: mqtt.MqttServerClient? - connection to a MySQL database


#### isOpen
Checks if the component is open.
`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.
`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### publish
Publish a message to a specified topic.

> Future publish(String topic, String data, Map\<String, dynamic\> options)

- **topic**: String - topic name
- **data**: String - message to be published
- **options**: Map\<String, dynamic\> - publishing options


#### readQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

`@override`
> Future\<List\<String\>\> readQueueNames()

- **returns**: Future\<List\<String\>\> - queue names.


#### setReferences
Sets references to dependent components.
`@override`
> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribes to a topic

> Future subscribe(String topic, Map\<String, dynamic\> options, [IMqttMessageListener](../imqtt_message_listener) listener)

- **topic**: String - topic name
- **options**: Map\<String, dynamic\> - subscription options
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


#### unsubscribe
Unsubscribes from a previously subscribed topic.

> Future unsubscribe(String topic, [IMqttMessageListener](../imqtt_message_listener) listener)

- **topic**: String - topic name
- **listener**: [IMqttMessageListener](../imqtt_message_listener) - message listener


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
