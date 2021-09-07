---
type: docs
title: "DataDogLogger"
linkTitle: "DataDogLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-datadog-python"
description: >
    Logger that dumps execution logs to a DataDog service.

---

**Implements:** [CachedCounters](../../../components/count/cached_counters/), [IReferenceable](../../../commons/refer/ireferenceable), [IReferenceable](../../../commons/run/iopenable)

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
Creates a new instance of the logger.

> DataDogLogger()


### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _save
Saves log messages from the cache.

> _save(counters: List[[LogMessage](../../../components/log/log_message)])

- **counters**: List[[LogMessage](../../../components/log/log_message)] - current counters measurements to be saved.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```python
counters = DataDogLogger()
counters.configure(ConfigParams.from_tuples(
   "credential.access_key", "827349874395872349875493"
))

logger.open('123')
logger.error("123", ex, "Error occured: %s", ex.message)
logger.debug("123", "Everything is OK.")
```
