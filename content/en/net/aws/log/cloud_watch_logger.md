---
type: docs
title: "CloudWatchLogger"
linkTitle: "CloudWatchLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Logger that writes log messages to AWS CloudWatch Log.
---

**Inherits**: [CachedLogger](../../../components/log/cached_logger), [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable)

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
    - **access_key**: AWS access/client id
 - **options**:
    - **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify the counters' source
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials requests

### Constructors
Creates a new instance of this logger.

> `public` CloudWatchLogger()


### Instance methods

#### Close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Save
Saves the current counters' measurements.

> `protected override` void Save(List<[LogMessage](../../../components/log/log_message)> messages)

- **messages**: [LogMessage](../../../components/log/log_message) - current counters' measurements to be saved.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Write
Writes a log message to the logger destination.

> `protected override` void Write([LogLevel](../../../components/log/log_level) level, string correlationId, Exception error, string message)

- **level**: [LogLevel](../../../components/log/log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ex**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.



### Examples

```go
var logger = new Logger();
logger.Configure(ConfigParams.FromTuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"));

logger.SetReferences(References.FromTuples(
new Descriptor("pip-services3", "logger", "console", "default", "1.0"), 
new ConsoleLogger() ));

logger.Open("123");

logger.SetLevel(LogLevel.debug);

logger.Error("123", ex, "Error occured: %s", ex.message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
