---
type: docs
title: "KafkaConnection"
linkTitle: "KafkaConnection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-kafka-go"
description: >
    Kafka connection using the default driver.

---

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

#### NewKafkaConnection
Creates a new instance of the connection component.

> NewKafkaConnection() [*KafkaConnection]()

### Fields

<span class="hide-title-link">


#### adminClient
Kafka admin client object;
> **adminClient**: kafka.Client

#### Options
Kafka connection properties
> **_clientConfig**: any

#### clientId
Hostname as client id.
> **clientId**: string

#### connectTimeout
Connection time out
> **connectTimeout**: int

#### connection
The Kafka connection object.
> **connection**: kafka.SyncProducer

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [*KafkaConnectionResolver](../kafka_connection_resolver)

#### logLevel
Log level
> **logLevel**: int


#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### maxRetries
Maximum number of entries.
> **maxRetries**: int

#### Options
Connection options
> **Options**: [*ConfigParams](../../../commons/config/config_params)

#### requestTimeout
Number of milliseconds to wait on flushing messages (default: 30000)
> **requestTimeout**: int

#### retryTimeout
Number of milliseconds to wait on each reconnection attempt (default: 30000)
> **retryTimeout**: int

#### subscriptions
Topic subscriptions
> **subscriptions**: [[]*KafkaSubscription](../kafka_subscription)

</span>


### Instance methods

#### CheckOpen
Checks if the connection is open.   
Raises an error is the connection is closed.

> (c [*KafkaConnection]()) checkOpen(correlationId string) error
- **returns**: error - error or nil no errors occured.


#### Close
Closes a component and frees used resources.

> (c [*KafkaConnection]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.

#### Commit!
**TODO: this method is not implemented**

Commit a message offset.



#### Configure
Configures the component by passing its configuration parameters.

> (c [*KafkaConnection]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### connectToAdmin
Connects an admin client on demand.

> (c [*KafkaConnection]()) connectToAdmin(correlationId string) error
- **returns**: error - error or nil no errors occured.


#### CreateQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*KafkaConnection]()) CreateQueue() error

- **name**: string - name of the queue to be created.
- **returns**: error - error or nil no errors occured.


#### DeleteQueue
Deletes a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*KafkaConnection]()) DeleteQueue() error

- **name**: string - name of the queue to be deleted.
- **returns**: error - error or nil no errors occured.


#### GetConnection
Gets the connection.
> (c [*KafkaConnection]()) GetConnection() kafka.SyncProducer

- **returns**: kafka.SyncProducer - connection to a MySQL database


#### IsOpen
Checks if the component is opened.

> (c [*KafkaConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*KafkaConnection]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


#### Publish
Publish a message to a specified topic.

> (c [*KafkaConnection]()) Publish(topic string, messages []*kafka.ProducerMessage, config *kafka.Config) error

- **topic**: string - topic where the message will be placed.
- **messages**: []*kafka.ProducerMessage - list of messages to be published.
- **config**: *kafka.Config - publishing options.
- **returns**: error - error or nil no errors occured.


#### ReadQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> (c [*KafkaConnection]()) ReadQueueNames() ([]string, error)

- **returns**: ([]string, error) - queue names.

#### Seek!
**TODO: this method is not implemented**

Seeks a message offset.


#### SetReferences
Sets references to dependent components.

> (c [*KafkaConnection]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### Subscribe
Subscribes to a topic

> (c [*KafkaConnection]()) Subscribe(topic string, groupId string, config *kafka.Config, listener [IKafkaMessageListener](../ikafka_message_listener)) error

- **topic**: string - subject(topic) name
- **groupId**: string - (optional) consumer group id
- **config**: *kafka.Config - subscription options
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
- **returns**: error - error or nil no errors occured.


#### Unsubscribe
Unsubscribes from a previously subscribed topic

> (c [*KafkaConnection]()) Unsubscribe(topic string, groupId string, listener [IKafkaMessageListener](../ikafka_message_listener)) error

- **topic**: string - topic name
- **groupId**: string - (optional) consumer group id
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
- **returns**: error - error or nil no errors occured.
