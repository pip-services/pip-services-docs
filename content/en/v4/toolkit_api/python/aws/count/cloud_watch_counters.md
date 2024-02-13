---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Implements**: [CachedCounters](../../../observability/count/cached_counters), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CloudWatchCounters class allows you to create performance counters that periodically dump counters to AWS Cloud Watch Metrics.

#### Configuration parameters
 
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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials requests

### Constructors
Creates a new instance of this counters.

> CloudWatchCounters()


### Instance methods

#### close
Closes component and frees used resources.

> close(context: Optional[str])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### _save
Saves the current counters' measurements.

> _save(counters: List[[Counter](../../../observability/count/counter)])

- **counters**: List[[Counter](../../../observability/count/counter)] - current counters' measurements to be saved.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



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
- #### [Counter](../../../observability/count/counter)
- #### [CachedCounters](../../../observability/count/cached_counters)
- #### [CompositeLogger](../../../observability/log/composite_logger) 
