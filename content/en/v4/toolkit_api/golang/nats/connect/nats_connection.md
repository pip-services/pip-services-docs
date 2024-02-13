---
type: docs
title: "NatsConnection"
linkTitle: "NatsConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-nats-go"
description: >
    NATS connection using the default driver.

---


### Description
The NatsConnection class is used to define NATS connections using the default driver.

**Important points**
- By defining a connection and sharing it through multiple message queues, you can reduce the number of used database connections.

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

#### NewNatsConnection
Creates a new instance of the connection component.

> NewNatsConnection() [*NatsConnection]()

### Fields

<span class="hide-title-link">

#### Connection
NATS connection pool object.
> **Connection**: *nats.Conn

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*NatsConnectionResolver](../nats_connection_resolver)

#### flushTimeout
Number of milliseconds to wait on flushing messages (default: 3000)
> **flushTimeout**: int

#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### maxReconnect
Maximum number of reconnection attempts (default: 3)
> **maxReconnect**: int

#### Options
Connection options
> **Options**: [*ConfigParams](../../../components/config/config_params)


#### reconnectTimeout
Number of milliseconds to wait on each reconnection attempt (default: 3000)
> **reconnectTimeout**: int

#### retryConnect
Retry to connect option
> **retryConnect**: bool

#### subscriptions
Topic subscriptions
> **subscriptions**: [[]*NatsSubscription](../nats_subscription)

</span>


### Methods

#### checkOpen
Checks if the connection is open.   
Raises an error if the connection is closed.

> (c [*NatsConnection]()) checkOpen() error

- **returns**: error - error or nil if no errors occurred.


#### Close
Closes a component and frees used resources.

> (c [*NatsConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*NatsConnection]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### CreateQueue
Creates a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*NatsConnection]()) CreateQueue() error

- **name**: string - name of the queue to be created.
- **returns**: error - error or nil if no errors occurred.


#### DeleteQueue
Deletes a message queue.
If the connection doesn't support this function, it exists without error.

> (c [*NatsConnection]()) DeleteQueue() error

- **name**: string - name of the queue to be deleted.
- **returns**: error - error or nil if no errors occurred.


#### GetConnection
Gets the connection.
> (c [*NatsConnection]()) GetConnection() *nats.Conn

- **returns**: *nats.Conn - connection to NATS


#### IsOpen
Checks if the component is open.

> (c [*NatsConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*NatsConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Publish
Publishes a message to a specified topic.

> (c [*NatsConnection]()) Publish(ctx context.Context, subject string, message *nats.Msg) error

- **ctx**: context.Context - operation context.
- **subject**: string - subject(topic) where the message will be placed
- **message**: *nats.Msg - message to be published
- **returns**: error - error or nil if no errors occurred.


#### ReadQueueNames
Reads a list of registered queue names.
If the connection doesn't support this function, it returns an empty list.

> (c [*NatsConnection]()) ReadQueueNames() ([]string, error)

- **returns**: ([]string, error) - queue names.


#### SetReferences
Sets references to dependent components.

> (c [*NatsConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### Subscribe
Subscribes to a topic.

> (c [*NatsConnection]()) Subscribe(ctx context.Context, subject string, queue string, listener [INatsMessageListener](../inats_message_listener)) error

- **ctx**: context.Context - operation context.
- **subject**: string - subject(topic) name
- **options**: string - subscription options
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener
- **returns**: error - error or nil if no errors occurred.


#### Unsubscribe
Unsubscribes from a previously subscribed topic.

> (c [*NatsConnection]()) Unsubscribe(ctx context.Context, subject string, queue string, listener [INatsMessageListener](../inats_message_listener)) error

- **ctx**: context.Context - operation context.
- **subject**: string - subject(topic) name
- **listener**: [INatsMessageListener](../inats_message_listener) - message listener
- **returns**: error - error or nil no errors occured.

