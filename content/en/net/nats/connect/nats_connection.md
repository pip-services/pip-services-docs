---
type: docs
title: "NatsConnection"
linkTitle: "NatsConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-nats-dotnet"
description: >
    NATS connection using the default driver.

---

**Inherits:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The NatsConnection class is used to define NATS connections using the default driver.

**Important points**
- By defining a connection and sharing it through multiple message queues, you can reduce number of used database connections.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **retry_connect**: (optional) turns on/off automated reconnect when the connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` NatsConnection()

### Fields

<span class="hide-title-link">

#### _clientId
Hostname as client id.
> `private` **_clientId**: string

#### _connection
NATS connection pool object.
> `protected` **_connection**: IConnection

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [NatsConnectionResolver](../nats_connection_resolver) = new [NatsConnectionResolver()](../nats_connection_resolver)

#### _flushTimeout
Number of milliseconds to wait on flushing messages (default: 3000)
> `private` **_flushTimeout**: int = 3000

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)

#### _maxReconnect
Maximum number of reconnection attempts (default: 3)
> `protected` **_maxReconnect**: number = 3

#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _reconnectTimeout
Number of milliseconds to wait on each reconnection attempt (default: 3000)
> `private` **_reconnectTimeout**: int = 3000

#### _retryConnect
Retry to connect option
> `protected` **_retryConnect**: bool = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: List<[NatsSubscription](../nats_subscription)> = new List<[NatsSubscription](../nats_subscription)>()

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

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### CreateQueueAsync
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> `public` Task CreateQueueAsync(string name)

- **name**: string - name of the queue to be created.


#### DeleteQueueAsync
Deletes a message queue.
If connection doesn't support this function, it exists without error.

> `public` Task DeleteQueueAsync(string name)

- **name**: string - name of the queue to be deleted.


#### GetConnection
Gets the connection.
> `public` IConnection GetConnection()

- **returns**: IConnection - connection to NATS


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### PublishAsync
Publishes a message to a specified topic.

> `public` Task PublishAsync(string subject, Msg message)

- **subject**: string - subject(topic) where the message will be placed
- **message**: Msg - message to be published


#### ReadQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> `public` Task\<List\<string\>\> ReadQueueNamesAsync()

- **returns**: Task\<List\<string\>\> - queue names.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### SubscribeAsync
Subscribes to a topic.

> `public` Task SubscribeAsync(string subject, string queue, [INatsMessageListener](../inats_message_listener) listener)

- **subject**: string - subject(topic) name
- **options**: string - subscription options
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener


#### UnsubsUnsubscribeAsynccribe
Unsubscribes from a previously subscribed topic.

> `public` Task UnsubscribeAsync(string subject, string queue, [INatsMessageListener](../inats_message_listener) listener)

- **subject**: string - subject (topic) name
- **queue**: string - TODO: add desscription
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener
