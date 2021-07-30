---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Implements**: [CachedCounters](../../../components/count/cached_counters), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CloudWatchCounters class allows you to create performance counters that periodically dump counters to AWS Cloud Watch Metrics.

#### Configuration parameters
 
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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials requests

### Constructors
Creates a new instance of this counters.

> CloudWatchCounters()


### Instance methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.

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
counters = CloudWatchCounters()

counters.config(ConfigParams.from_tuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
))

counters.set_references(References.from_tuples(
    Descriptor("pip-services", "logger", "console", "default", "1.0"),
    ConsoleLogger()
))

counters.open("123")
counters.increment("mycomponent.mymethod.calls")
timing = counters.begin_timing("mycomponent.mymethod.exec_time")

try:
    ...
except Exception as e
    timing.end_timing(e)

counters.dump();
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
