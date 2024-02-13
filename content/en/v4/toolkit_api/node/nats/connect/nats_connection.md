---
type: docs
title: "NatsConnection"
linkTitle: "NatsConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-nats-node"
description: >
    NATS connection using the default driver.

---

**Implements:** [IMessageQueueConnection](../../../messaging/connect/imessage_queue_connection), [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description
The NatsConnection class is used to define NATS connections using the default driver.

**Important points**
- By defining a connection and sharing it through multiple message queues, you can reduce number of used database connections.

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
    - **retry_connect**: (optional) turns on/off automated reconnect when the connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor()

### Fields

<span class="hide-title-link">

#### _clientId
Hostname as client id.
> `protected` **_clientId**: string

#### _connection
NATS connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [NatsConnectionResolver](../nats_connection_resolver)

#### _flushTimeout
Number of milliseconds to wait on flushing messages (default: 3000)
> `protected` **_flushTimeout**: number = 3000

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger) = new [CompositeLogger()](../../../observability/log/composite_logger)

#### _maxReconnect
Maximum number of reconnection attempts (default: 3)
> `protected` **_maxReconnect**: number = 3

#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../components/config/config_params) = new [ConfigParams()](../../../components/config/config_params)


#### _reconnectTimeout
Number of milliseconds to wait on each reconnection attempt (default: 3000)
> `protected` **_reconnectTimeout**: number = 3000

#### _retryConnect
Retry to connect option
> `protected` **_retryConnect**: boolean = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: [NatsSubscription[]](../nats_subscription) = []

</span>


### Instance methods

#### checkOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> `protected` checkOpen(): void


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### createQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> `public` createQueue(name: string): Promise\<void\>

- **name**: string - name of the queue to be created.


#### deleteQueue
Deletes a message queue.
If connection doesn't support this function, it exists without error.

> `public` deleteQueue(name: string): Promise\<void\>

- **name**: string - name of the queue to be deleted.


#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to NATS


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### publish
Publishes a message to a specified topic.

> `public` publish(subject: string, message: any): Promise\<void\>

- **subject**: string - subject(topic) where the message will be placed
- **message**: any - message to be published


#### readQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> `public` readQueueNames(): Promise\<string[]\>

- **returns**: Promise\<string[]\> - queue names.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### subscribe
Subscribes to a topic.

> `public` subscribe(subject: string, options: any, listener: [INatsMessageListener](../inats_message_listener)): Promise\<void\>

- **subject**: string - subject(topic) name
- **options**: any - subscription options
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener


#### unsubscribe
Unsubscribes from a previously subscribed topic.

> `public` unsubscribe(subject: string, listener: [INatsMessageListener](../inats_message_listener)): Promise\<void\>

- **subject**: string - subject(topic) name
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener
