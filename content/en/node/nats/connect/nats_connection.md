---
type: docs
title: "NatsConnection"
linkTitle: "NatsConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-nats-nodex"
description: >
    NATS connection using plain driver.

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
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is log (default: true)
    - **max_reconnect**: (optional) maximum reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor()

### Fields

<span class="hide-title-link">

#### _clientId
The hostname as client id.
> `protected` **_clientId**: string

#### _connection
The NATS connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [NatsConnectionResolver](../nats_connection_resolver)

#### _flushTimeout
TODO: add description
> `protected` **_flushTimeout**: number = 3000

#### _logger
TODO: add description
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = new [CompositeLogger()](../../../components/log/composite_logger)

#### _maxReconnect
TODO: add description
> `protected` **_maxReconnect**: number = 3

#### _options
TODO: add description
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = new [ConfigParams()](../../../commons/config/config_params)


#### _reconnectTimeout
TODO: add description
> `protected` **_reconnectTimeout**: number = 3000

#### _retryConnect
TODO: add description
> `protected` **_retryConnect**: boolean = true

#### _subscriptions
Topic subscriptions
> `protected` **_subscriptions**: [NatsSubscription[]](../nats_subscription) = []

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


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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

> `public` publish(subject: string, message: any): Promise\<void\>

- **subject**: string - a subject(topic) where the message will be placed
- **message**: any - a message to be published


#### readQueueNames
Reads a list of registered queue names.
If connection doesn't support this function returnes an empty list.

> `public` readQueueNames(): Promise\<string[]\>

- **returns**: Promise\<string[]\> - queue names.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### subscribe
Subscribe to a topic

> `public` subscribe(subject: string, options: any, listener: [INatsMessageListener](../inats_message_listener)): Promise\<void\>

- **subject**: string - a subject(topic) name
- **options**: any - subscription options
- **listener**: [INatsMessageListener](../inats_message_listener) - a message listener


#### unsubscribe
Unsubscribe from a previously subscribed topic

> `public` unsubscribe(subject: string, listener: [INatsMessageListener](../inats_message_listener)): Promise\<void\>

- **subject**: string - a subject(topic) name
- **listener**: [INatsMessageListener](../inats_message_listener) - a message listener