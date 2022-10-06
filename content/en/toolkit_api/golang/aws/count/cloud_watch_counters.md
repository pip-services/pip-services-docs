---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-aws-gox"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Implements:** [CachedCounters](../../../components/count/cached_counters)

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
    - **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify the counters' source
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials requests

### Constructors

#### NewCloudWatchCounters
Creates a new instance of this counters.

> NewCloudWatchCounters() [*CloudWatchCounters]()


### Methods

#### Close
Closes component and frees used resources.

> (c [*CloudWatchCounters]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*CloudWatchCounters]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*CloudWatchCounters]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*CloudWatchCounters]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### Save
Saves the current counters' measurements.

> (c [*CloudWatchCounters]()) Save(ctx context.Context, counters [[]*Counter](../../../components/count/counter)) error

- **ctx**: context.Context - operation context.
- **counters**: [[]*Counter](../../../components/count/counter) - current counters' measurements to be saved.
- **returns**: error - error or nil no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*CloudWatchCounters]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```go
ctx := context.Background()
counters := NewCloudWatchCounters()
counters.Configure(ctx, config.NewConfigParamsFromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
))
counters.SetReferences(ctx, NewReferencesFromTuples(
    NewDescriptor("pip-services", "logger", "console", "default", "1.0"),
    NewConsoleLogger()
))

err := counters.Open(ctx, "123")
    ...

counters.Increment(ctx, "mycomponent.mymethod.calls")
timing := counters.BeginTiming(ctx, "mycomponent.mymethod.exec_time")

    ...

timing.EndTiming(ctx, err)

counters.Dump(ctx)
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
