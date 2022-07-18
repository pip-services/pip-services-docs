---
type: docs
title: "DataDogCounters"
linkTitle: "DataDogCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-datadog-python"
description: >
    Performance counters that send their metrics to a DataDog service.


---

**Implements:** [CachedCounters](../../../components/count/cached_counters/), [IReferenceable](../../../commons/refer/ireferenceable), [IReferenceable](../../../commons/run/iopenable)

### Description
The DataDogCounters class allows you to create performance counters that send their metrics to a DataDog service.


#### Configuration parameters

- **connection(s)**:           
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: (optional) connection protocol: http or https (default: https)
    - **host**: (optional) host name or IP address (default: api.datadoghq.com)
    - **port**: (optional) port number (default: 443)
    - **uri**: (optional) resource URI or connection string with all parameters in it
- **credential**:
    - **access_key**: DataDog client api key
- **options**:
  - **retries**: number of retries (default: 3)
  - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
  - **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection

### Constructors
Creates a new instance of the class.

> DataDogCounters()


### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _save
Saves the current counters' measurements.

> _save(counters: List[[Counter](../../../components/count/counter)])

- **counters**: List[[Counter](../../../components/count/counter)] - current counters' measurements to be saved.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```python
counters = DataDogCounters()
counters.configure(ConfigParams.from_tuples(
   "credential.access_key", "827349874395872349875493"
))

counters.open('123')

counters.increment("mycomponent.mymethod.calls")

timing = counters.begin_timing("mycomponent.mymethod.exec_time")

try:
    ...
finally:
    timing.end_timing()

counters.dump()
```


### See also
- #### [RestService](../../../rpc/services/rest_service)
- #### [CommandableHttpService](../../../rpc/services/commandable_http_service)
