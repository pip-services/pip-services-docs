---
type: docs
title: "KafkaConnection"
linkTitle: "KafkaConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-kafka-dotnet"
description: >
    Kafka connection using the default driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The KafkaConnection class allows you to create connections to Kafka using the default driver.

**Important points**
- By defining a connection and sharing it through multiple message queues you can reduce the number of used database connections.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **log_level**: (optional) log level 0 - None, 1 - Error, 2 - Warn, 3 - Info, 4 - Debug (default: 1)
    - **acks**: (optional) control the number of required acks: -1 - all, 0 - none, 1 - only leader (default: -1)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on broker request (default: 30000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor()

### Fields

<span class="hide-title-link">


#### _adminClient
Kafka admin client object
> `protected` **_adminClient**: IAdminClient

#### _clientId
Hostname as client id
> `protected` **_clientId**: string

#### _connectTimeout
Connection time out
> `protected` **_connectTimeout**: int = 1000

#### _connection
Kafka connection pool object
> `protected` **_connection**: IProducer\<byte[], byte[]\>

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [KafkaConnectionResolver](../kafka_connection_resolver)

#### _logLevel
Log level
> `protected` **_logLevel**: _logLevel = 1


#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)

#### _maxRetries
Maximum number of entries.
> `protected` **_maxRetries**: int = 5

#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _requestTimeout
Number of milliseconds to wait on flushing messages (default: 30000)
> `protected` **_requestTimeout**: int = 30000

#### _retryTimeout
Number of milliseconds to wait on each reconnection attempt (default: 30000)
> `protected` **_retryTimeout**: int = 30000

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: List<[KafkaSubscription](../kafka_subscription)>

</span>


### Instance methods

#### СheckOpen!
**Note: this method is not implemented**

Checks if the connection is open.   
Raises an error is the connection is closed.


#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Commit!
**Note: this method is not implemented**

Commit a message offset.



#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ConnectToAdmin!
**Note: this method is not implemented**

Connects an admin client on demand.


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
> `public` IProducer\<byte[], byte[]\> GetConnection()

- **returns**: IProducer\<byte[], byte[]\> - connection to Kafka.


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

> `public` Task PublishAsync(string topic, Message\<byte[], byte[]\> message)

- **topic**: string - topic where the message will be placed.
- **messages**: Message\<byte[], byte[]\> - list of messages to be published.


#### ReadQueueNamesAsync
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> `public` Task\<List\<string\>\> ReadQueueNamesAsync()

- **returns**: Task\<List\<string\>\> - queue names.

#### Seek!
**Note: this method is not implemented**

Seeks a message offset.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### SubscribeAsync
Subscribes to a topic.

> `public` Task SubscribeAsync(string topic, string groupId, ConsumerConfig config, [IKafkaMessageListener](../ikafka_message_listener) listener)

- **topic**: string - subject(topic) name
- **groupId**: string - (optional) consumer group id
- **config**: ConsumerConfig - subscription options
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener


#### UnsubscribeAsync
Unsubscribes from a previously subscribed topic.

> `public` Task UnsubscribeAsync(string topic, string groupId, [IKafkaMessageListener](../ikafka_message_listener) listener)

- **topic**: string - topic name
- **groupId**: string - (optional) consumer group id
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
