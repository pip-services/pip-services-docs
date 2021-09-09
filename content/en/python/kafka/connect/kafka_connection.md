---
type: docs
title: "KafkaConnection"
linkTitle: "KafkaConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-kafka-python"
description: >
    Kafka connection using the default driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

By defining a connection and sharing it through multiple message queues
you can reduce the number of used database connections.

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
    - **log_level**: (optional) log level 0 - None, 1 - Error, 2 - Warn, 3 - Info, 4 - Debug (default: 1)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> KafkaConnection()

### Fields

<span class="hide-title-link">


#### _adminClient
Kafka admin client object;
> **_admin_client**: [KafkaAdminClient](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaAdminClient.html#)

#### _clientConfig
Kafka connection properties
> **_client_config**: dict

#### _clientId
Hostname as client id.
> **_client_id**: str

#### _connectTimeout
Connection time out
> **_connectTimeout**: int = 1000

#### _connection
Kafka connection pool object
> **_connection**: Any

#### _connectionResolver
Connection resolver
> **_connectionResolver**: [KafkaConnectionResolver](../kafka_connection_resolver)

#### _logLevel
Log level
> **_log_level**: int = 1


#### _logger
Logger
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)

#### _maxRetries
Maximum number of entries.
> **_maxRetries**: int = 5

#### _options
Connection options
> **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _producer
Kafka message producer object
> **_producer**: [KafkaProducer](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html)

#### _requestTimeout
Number of milliseconds to wait on flushing messages (default: 30000)
> **_request_timeout**: int = 30000

#### _retryTimeout
Number of milliseconds to wait on each reconnection attempt (default: 30000)
> **_retry_timeout**: int = 30000

#### _subscriptions
Topic subscriptions
> **_subscriptions**: List[[KafkaSubscription](../kafka_subscription)] = []

</span>


### Instance methods

#### checkOpen
Checks if the connection is open.   
Raises an error is the connection is closed.

> check_open()


#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: str - (optional) transaction id used to trace execution through the call chain.

#### commit
Commit a message offset.

> commit(topic: str, group_id: str, partition: int, offset: int, listener: [IKafkaMessageListener](../ikafka_message_listener))

- **topic**: str - topic name
- **group_id**: str - (optional) consumer group id
- **partition**: number - partition number
- **offset**: int - message offset
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### connect_to_admin
Connects an admin client on demand.

> _connect_to_admin()


#### create_queue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> create_queue(name: str)

- **name**: str - name of the queue to be created.


#### delete_dueue
Deletes a message queue.
If the connection doesn't support this function, it exists without error.

> delete_dueue(name: str)

- **name**: str - name of the queue to be deleted.


#### get_connection
Gets the connection.
> get_connection(): Any

- **returns**: Any - connection to a MySQL database


#### getProducer
Gets the Kafka message producer object

> getProducer(): [KafkaProducer](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html)

- **returns**: [KafkaProducer](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html) - producer object


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: str - (optional) transaction id used to trace execution through the call chain.


#### publish
Publish a message to a specified topic.

> publish(topic: str, messages: List[Any], options: dict)

- **topic**: str - topic where the message will be placed.
- **messages**: List[Any] - list of messages to be published.
- **options**: dict - publishing options.


#### read_queue_names
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> read_queue_names(): List[str]

- **returns**: List[str] - queue names.

#### seek
Seeks a message offset.

> seek(topic: str, group_id: str, partition: int, offset: int, listener: [IKafkaMessageListener](../ikafka_message_listener))

- **topic**: str - topic name
- **group_id**: str - (optional) consumer group id
- **partition**: int - partition number
- **offset**: int - message offset
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribes to a topic

> subscribe(topic: str, group_id: str, options: dict, listener: [IKafkaMessageListener](../ikafka_message_listener))

- **topic**: str - subject(topic) name
- **group_id**: str - (optional) consumer group id
- **options**: dict - subscription options
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener


#### unsubscribe
Unsubscribes from a previously subscribed topic

> unsubscribe(topic: str, group_id: str, listener: [IKafkaMessageListener](../ikafka_message_listener))

- **topic**: str - topic name
- **group_id**: str - (optional) consumer group id
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
