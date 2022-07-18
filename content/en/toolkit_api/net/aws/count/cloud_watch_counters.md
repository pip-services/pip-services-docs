---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Inherits**: [CachedCounters](../../../components/count/cached_counters), [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable)


### Description

The CloudWatchCounters class allows you to create performance counters that periodically dump counters to AWS Cloud Watch Metrics.

#### Configuration parameters
 
- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key
- **options**:
    - **interval**: interval in milliseconds to save current counters' measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify the counters' source
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credential requests

### Constructors
Creates a new instance of this class.

> `public` CloudWatchCounters()


### Instance methods

#### Close
Closes component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing its configuration parameters.

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

> `protected override` void Save(IEnumerable<[Counter](../../../components/count/counter)> counters)

- **counters**: IEnumerable<[Counter](../../../components/count/counter)> - current counters' measurements to be saved.

#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```cs
var counters = new CloudWatchCounters();
counters.Configure(ConfigParams.FromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"));

counters.SetReferences(References.fromTuples(
    new Descriptor("pip-services3", "logger", "console", "default", "1.0"), 
    new ConsoleLogger() ));
    counters.Open("123");

counters.Increment("mycomponent.mymethod.calls");
var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

try {
    ...
} finally {
    timing.EndTiming();
}

counters.Dump();
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
