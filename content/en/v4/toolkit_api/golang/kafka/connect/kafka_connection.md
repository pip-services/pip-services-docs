---
type: docs
title: "KafkaConnection"
linkTitle: "KafkaConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-kafka-go"
description: >
    Kafka connection using the default driver.

---

### Description
KafkaConnection is used to create Kafka connections using the default driver.

**Important points**
By defining a connection and sharing it through multiple message queues
you can reduce the number of used database connections.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **acks**: (optional) control the number of required acks: -1 - all, 0 - none, 1 - only leader (default: -1)
    - **num_partitions**: (optional) number of partitions of the created topic (default: 1)
    - **replication_factor**: (optional) kafka replication factor of the topic (default: 1)
    - **log_level**: (optional) log level 0 - None, 1 - Error, 2 - Warn, 3 - Info, 4 - Debug (default: 1)
    - **connect_timeout**: (optional) number of milliseconds to connect to broker (default: 1000)
    - **max_retries**: (optional) maximum retry attempts (default: 5)
    - **retry_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 30000)
    - **request_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 30000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors

#### NewKafkaConnection
Creates a new instance of the connection component.

> NewKafkaConnection() [*KafkaConnection]()

### Fields

<span class="hide-title-link">


#### adminClient
Kafka admin client object
> **adminClient**: kafka.ClusterAdmin

#### client
Kafka client object
> **client**: kafka.Client

#### clientId
Hostname as client id
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
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### maxRetries
Maximum number of entries.
> **maxRetries**: int

#### Options
Connection options
> **Options**: [*ConfigParams](../../../components/config/config_params)

#### numPartitions
Num of partitions in the topic (default 1).
> **numPartitions**: int

#### replicationFactor
Num of replicas for Kafka (default 1).
> **replicationFactor**: int

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


### Methods

#### CheckOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> (c [*KafkaConnection]()) checkOpen(context [IContext](../../../components/context/icontext)) error
- **returns**: error - error or nil if no errors occurred.


#### Close
Closes a component and frees used resources.

> (c [*KafkaConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.

#### Commit!
**Note: this method is not implemented**

Commit a message offset.



#### Configure
Configures the component by passing its configuration parameters.

> (c [*KafkaConnection]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### connectToAdmin
Connects an admin client on demand.

> (c [*KafkaConnection]()) connectToAdmin(context [IContext](../../../components/context/icontext)) error
- **returns**: error - error or nil if no errors occurred.


#### CreateQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*KafkaConnection]()) CreateQueue(name string) error

- **name**: string - name of the queue to be created.
- **returns**: error - error or nil if no errors occurred.


#### DeleteQueue
Deletes a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*KafkaConnection]()) DeleteQueue(name string) error

- **name**: string - name of the queue to be deleted.
- **returns**: error - error or nil if no errors occurred.


#### GetConnection
Gets the connection.
> (c [*KafkaConnection]()) GetConnection() kafka.SyncProducer

- **returns**: kafka.SyncProducer - connection to Kafka


#### IsOpen
Checks if the component is open.

> (c [*KafkaConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*KafkaConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Publish
Publish a message to a specified topic.

> (c [*KafkaConnection]()) Publish(ctx context.Context, topic string, messages []*kafka.ProducerMessage, config *kafka.Config) error

- **ctx**: context.Context - operation context. 
- **topic**: string - topic where the message will be placed.
- **messages**: []*kafka.ProducerMessage - list of messages to be published.
- **config**: *kafka.Config - publishing options.
- **returns**: error - error or nil if no errors occurred.


#### ReadQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> (c [*KafkaConnection]()) ReadQueueNames() ([]string, error)

- **returns**: ([]string, error) - queue names.

#### Seek!
**Note: this method is not implemented**

Seeks a message offset.


#### SetReferences
Sets references to dependent components.

> (c [*KafkaConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### Subscribe
Subscribes to a topic.

> (c [*KafkaConnection]()) Subscribe(ctx context.Context, topic string, groupId string, config *kafka.Config, listener [IKafkaMessageListener](../ikafka_message_listener)) error

- **ctx**: context.Context - operation context.
- **topic**: string - subject(topic) name
- **groupId**: string - (optional) consumer group id
- **config**: *kafka.Config - subscription options
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
- **returns**: error - error or nil if no errors occurred.


#### Unsubscribe
Unsubscribes from a previously subscribed topic

> (c [*KafkaConnection]()) Unsubscribe(ctx context.Context, topic string, groupId string, listener [IKafkaMessageListener](../ikafka_message_listener)) error

- **ctx**: context.Context - operation context.
- **topic**: string - topic name
- **groupId**: string - (optional) consumer group id
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - message listener
- **returns**: error - error or nil if no errors occurred.

