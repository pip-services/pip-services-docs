---
type: docs
title: "CloudWatchLogger"
linkTitle: "CloudWatchLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
description: >
    Logger that writes log messages to AWS CloudWatch Log.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

**Extends:** [CachedLogger](../../../observability/log/cached_logger)

### Description

The CloudWatchLogger class allows you to create loggers that write log messages to AWS CloudWatch Log.

#### Configuration parameters
 
- **stream**: (optional) CloudWatch Log stream (default: context name)
- **group**: (optional) CloudWatch Log group (default: context instance ID or hostname)
- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key
 - **options**:
    - **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify the counters' source
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials requests

### Constructors
Creates a new instance of this logger.

> CloudWatchLogger()


### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### save
Saves the current counters' measurements.

`@override`
> Future save(List<[LogMessage](../../../observability/log/log_message)> messages)

- **messages**: List<[LogMessage](../../../observability/log/log_message)> - current counters' measurements to be saved.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### write
Writes a log message to the logger destination.

> void write([LogLevel](../../../observability/log/log_level) level, IContext context, Exception ex, String message)

- **level**: [LogLevel](../../../observability/log/log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ex**: Exception - error object associated with this message.
- **message**: String - human-readable message to log.



### Examples

```dart
var logger =  Logger();
logger.config(ConfigParams.fromTuples(
    'stream', 'mystream',
    'group', 'mygroup',
    'connection.region', 'us-east-1',
    'connection.access_id', 'XXXXXXXXXXX',
    'connection.access_key', 'XXXXXXXXXXX'
));

logger.setReferences(References.fromTuples([
     Descriptor('pip-services', 'logger', 'console', 'default', '1.0'),
     ConsoleLogger()
]));

logger.open('123');
    ...
logger.setLevel(LogLevel.debug);
logger.error('123', ex, 'Error occured: %s', ex.message);
logger.debug('123', 'Everything is OK.');
```

### See also
- #### [Counter](../../../observability/count/counter)
- #### [CachedCounters](../../../observability/count/cached_counters)
- #### [CompositeLogger](../../../observability/log/composite_logger) 
