---
type: docs
title: "CloudWatchLogger"
linkTitle: "CloudWatchLogger"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Logger that writes log messages to AWS CloudWatch Log.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

**Extends:** [CachedLogger](../../../components/log/cached_logger)

### Description

The CloudWatchLogger class allows you to create loggers that write log messages to AWS CloudWatch Log.

#### Configuration parameters
 
- **stream**: (optional) CloudWatch Log stream (default: context name)
- **group**: (optional) CloudWatch Log group (default: context instance ID or hostname)
- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key
 - **options**:
    - **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify the counters' source
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials requests

### Constructors
Creates a new instance of this logger.

> `public` constructor()


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### save
Saves the current counters' measurements.

> `protected` save(messages: [LogMessage[]](../../../components/log/log_message)): Promise\<void\> 

- **messages**: [LogMessage[]](../../../components/log/log_message) - current counters' measurements to be saved.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### write
Writes a log message to the logger destination.

> `protected` write(level: [LogLevel](../../../components/log/log_level), correlationId: string, ex: Error, message: string): void

- **level**: [LogLevel](../../../components/log/log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ex**: Error - error object associated with this message.
- **message**: string - human-readable message to log.



### Examples

```typescript
let logger = new Logger();
logger.config(ConfigParams.fromTuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
));
logger.setReferences(References.fromTuples(
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), 
    new ConsoleLogger()
));
    
await logger.open("123");
    
logger.setLevel(LogLevel.debug);
    
logger.error("123", ex, "Error occured: %s", ex.message);
logger.debug("123", "Everything is OK.");
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
