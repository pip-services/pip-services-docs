---
type: docs
title: "FluentdLogger"
linkTitle: "FluentdLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-fluentd-node"
description: > 
    Logger that dumps execution logs to a Fluentd service.
---
**Extends:** [CachedLogger](../../../observability/log/cached_logger)

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description
The FluentdLogger class allows you to create loggers that dump execution logs to a Fluentd service.

**Important points**

- Authentication is not supported in this version.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol: http or https
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)        
    - **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
    - **timeout**: invocation timeout in milliseconds (default: 30 sec)


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify the counter's source.

### Constructors

Creates a new instance of the logger.

> `public` constructor()


### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### save
Saves log messages from the cache.

> `protected` save(messages: [LogMessage](../../../observability/log/log_message)[]): Promise\<void\>

- **messages**: [LogMessage](../../../observability/log/log_message)[] - list with log messages


#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **messages**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples

```typescript
let logger = new FluentdLogger();
logger.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 24224
));
  
await logger.open("123");
   
logger.error("123_component", ex, "Error occured: %s", ex.message);
logger.debug("123_component", "Everything is OK.");
```
