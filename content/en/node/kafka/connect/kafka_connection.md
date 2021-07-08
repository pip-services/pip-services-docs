---
type: docs
title: "KafkaConnection"
linkTitle: "KafkaConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-kafka-nodex"
description: >
    Kafka connection using plain driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

By defining a connection and sharing it through multiple message queues
you can reduce number of used database connections.

#### Configuration parameters

- **client_id**: (optional) name of the client id
- **connection(s)**:    
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: user name
    - **password**: user password
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

> `public` constructor()

### Fields

<span class="hide-title-link">


#### _adminClient
The Kafka admin client object;
> `protected` **_adminClient**: any

#### _clientConfig
Kafka connection properties
> `protected` **_clientConfig**: any

#### _clientId
The hostname as client id.
> `protected` **_clientId**: string

#### _connectTimeout
TODO: add description
> `protected` **_connectTimeout**: number = 1000

#### _connection
The Kafka connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [KafkaConnectionResolver](../kafka_connection_resolver)

#### _logLevel
TODO: add description
> `protected` **_logLevel**: number = 1


#### _logger
TODO: add description
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)

#### _maxRetries
TODO: add description
> `protected` **_maxRetries**: number = 5

#### _options
TODO: add description
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _producer
The Kafka message producer object
> `protected` **_producer**: any

#### _requestTimeout
TODO: add description
> `protected` **_requestTimeout**: number = 30000

#### _retryTimeout
TODO: add description
> `protected` **_retryTimeout**: number = 30000

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: [KafkaSubscription[]](../kafka_subscription) = []

</span>


### Instance methods

#### checkOpen
Checks if connection is open.   
Raise an error is connection is closed.

> `protected` checkOpen(): void


#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### commit
Commit a message offset.

> `public` commit(topic: string, groupId: string, partition: number, offset: number, listener: [IKafkaMessageListener](../ikafka_message_listener)): Promise\<void\>

- **topic**: string - a topic name
- **groupId**: string - (optional) a consumer group id
- **partition**: number - a partition number
- **offset**: number - a message offset
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - a message listener


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### connectToAdmin
Connect admin client on demand.

> `protected` connectToAdmin(): Promise\<void\>


#### createQueue
Creates a message queue.
If connection doesn't support this function it exists without error.

> `public` createQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be created.


#### deleteQueue
Deletes a message queue.
If connection doesn't support this function it exists without error.

> `public` deleteQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be deleted.


#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a MySQL database


#### getProducer
Gets the Kafka message producer object

> `public` getProducer(): any

- **returns**: any - producer object


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### publish
Publish a message to a specified topic

> `public` publish(topic: string, messages: any[], options: any): Promise\<void\>

- **topic**: string - a topic where the message will be placed
- **messages**: any[] - a list of messages to be published
- **options**: any - publishing options


#### readQueueNames
Reads a list of registered queue names.
If connection doesn't support this function returnes an empty list.

> `public` readQueueNames(): Promise\<string[]\>

- **returns**: Promise\<string[]\> - queue names.

#### seek
Seek a message offset.

> `public` seek(topic: string, groupId: string, partition: number, offset: number, listener: [IKafkaMessageListener](../ikafka_message_listener)): Promise\<void\>

- **topic**: string - a topic name
- **groupId**: string - (optional) a consumer group id
- **partition**: number - a partition number
- **offset**: number - a message offset
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - a message listener


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribe to a topic

> `public` subscribe(topic: string, groupId: string, options: any, listener: [IKafkaMessageListener](../ikafka_message_listener)): Promise\<void\>

- **topic**: string - a subject(topic) name
- **groupId**: string - (optional) a consumer group id
- **options**: any - subscription options
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - a message listener


#### unsubscribe
Unsubscribe from a previously subscribed topic

> `public` unsubscribe(topic: string, groupId: string, listener: [IKafkaMessageListener](../ikafka_message_listener)): Promise\<void\>

- **topic**: string - a topic name
- **groupId**: string - (optional) a consumer group id
- **listener**: [IKafkaMessageListener](../ikafka_message_listener) - a message listener