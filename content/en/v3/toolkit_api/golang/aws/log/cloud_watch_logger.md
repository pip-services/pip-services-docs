---
type: docs
title: "CloudWatchLogger"
linkTitle: "CloudWatchLogger"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-aws-gox"
description: >
    Logger that writes log messages to AWS CloudWatch Log.
---

**Implements:** [CachedLogger](../../../components/log/cached_logger)

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

#### NewCloudWatchLogger
Creates a new instance of this logger.

> NewCloudWatchLogger() [*CloudWatchLogger]()


### Methods

#### Close
Closes a component and frees used resources.

> (c [*CloudWatchLogger]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occured.

#### Configure
Configures a component by passing configuration parameters.

> (c [*CloudWatchLogger]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*CloudWatchLogger]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*CloudWatchLogger]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occured.

#### Save
Saves the current counters' measurements.

> (c [*CloudWatchLogger]()) Save(ctx context.Context, messages [[]*LogMessage](../../../components/log/log_message)) error

- **ctx**: context.Context - operation context.
- **messages**: [[]*LogMessage](../../../components/log/log_message) - current counters' measurements to be saved.
- **returns**: error - error or nil no errors occured.

#### SetReferences
Sets references to dependent components.

> `(c [*CloudWatchLogger]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Write
Writes a log message to the logger destination.

> (c [*CloudWatchLogger]()) Write(ctx context.Context, level int, correlationId string, ex error, message string)

- **ctx**: context.Context - operation context.
- **level**: int - log level ([LogLevel](../../../components/log/log_level)).
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ex**: error - error object associated with this message.
- **message**: string - human-readable message to log.



### Examples

```go
logger := NewLogger();
logger.Configure(context.Background(), NewConfigParamsFromTuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
))
logger.SetReferences(context.Background(), NewReferencesFromTuples(
    NewDescriptor("pip-services", "logger", "console", "default", "1.0"),
    NewConsoleLogger()
))

err:= logger.Open(context.Background(), "123")
...

logger.SetLevel(Debug)

logger.Error(context.Background(), "123", ex, "Error occured: %s", ex.Message)
logger.Debug(context.Background(), "123", "Everything is OK.")
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
