---
type: docs
title: "DataDogLogger"
linkTitle: "DataDogLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-datadog-dotnet"
description: >
    Logger that dumps execution logs to a DataDog service.

---

**Inherits:** [CachedCounters](../../../components/count/cached_counters/), [IReferenceable](../../../commons/refer/ireferenceable), [IReferenceable](../../../commons/run/iopenable)

### Description
DataDog is a popular monitoring SaaS service. It collects logs, metrics, events
from infrastructure and applications and analyze them in a single place.

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
Creates a new instance of the logger.

> `public` DataDogLogger()


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Save
Saves log messages from the cache.

> `protected override` void Save(List<[LogMessage](../../../components/log/log_message)> messages)

- **counters**: List<[LogMessage](../../../components/log/log_message)> - current counters measurements to be saved.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```cs
let logger = new DataDogLogger();
logger.Configure(ConfigParams.FromTuples(
    "credential.access_key", "827349874395872349875493"
));
 
await logger.OpenAsync("123");

logger.Error("123", ex, "Error occured: {0}", ex.message);
logger.Debug("123", "Everything is OK.");
```
