---
type: docs
title: "DataDogLogger"
linkTitle: "DataDogLogger"
gitUrl: "https://github.com/pip-services3-go/pip-services3-datadog-go"
description: >
    Logger that dumps execution logs to a DataDog service.

---

**Implements:** [CachedCounters](../../../components/count/cached_counters/)

### Description
The DataDogLogger class allows you to create loggers that dump execution logs to a DataDog service.


#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name
- **connection**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: (optional) connection protocol: http or https (default: https)
    - **host**: (optional) host name or IP address (default: http-intake.logs.datadoghq.com)
    - **port**: (optional) port number (default: 443)
    - **uri**: (optional) resource URI or connection string with all parameters in it
- **credential**:
    - **access_key**: DataDog client api key
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)
    - **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
    - **timeout**: invocation timeout in milliseconds (default: 30 sec)
    - **max_retries**: maximum number of retries (default: 3)



#### References

- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify counters source
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection

### Constructors

#### NewDataDogLogger
Creates a new instance of the logger.

> NewDataDogLogger() [*DataDogLogger]()


### Methods

#### Close
Closes a component and frees used resources.

> (c [*DataDogLogger]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


#### Configure
Configures the component by passing its configuration parameters. 

> (c [*DataDogLogger]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> (c [*DataDogLogger]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*DataDogLogger]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


#### Save
Saves log messages from the cache.

> (c *DataDogLogger) Save(messages [[]*LogMessage](../../../components/log/log_message)) error

- **messages**: [[]*LogMessage](../../../components/log/log_message) - a list with log messages
- **returns**: error - error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*DataDogCounters]()) SetReferences(refs [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
logger := NewDataDogLogger();
logger.Configure(NewConfigParamsFromTuples(
    "credential.access_key", "827349874395872349875493"
));

err := logger.Open("123");
logger.Error("123", ex, "Error occured: %s", ex.message);
logger.Debug("123", "Everything is OK.");
```
