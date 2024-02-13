---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

**Extends:** [CachedCounters](../../../observability/count/cached_counters)

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

`@override`
> Future close(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

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
> Future save(List<[Counter](../../../observability/count/counter)> counters)

- **counters**: List<[Counter](../../../observability/count/counter)> - current counters' measurements to be saved.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```dart
var counters = new CloudWatchCounters();
counters.config(ConfigParams.fromTuples([
    'connection.region', 'us-east-1',
    'connection.access_id', 'XXXXXXXXXXX',
    'connection.access_key', 'XXXXXXXXXXX'
]));

counters.setReferences(References.fromTuples([
    Descriptor('pip-services', 'logger', 'console', 'default', '1.0'),
    ConsoleLogger()
]));

await counters.open('123');
    ...
counters.increment('mycomponent.mymethod.calls');
var counter_timing = counters.beginTiming('mycomponent.mymethod.exec_time');
try {
    ...
} finally {
    counter_timing.endTiming();
}
counters.dump();
```

### See also
- #### [Counter](../../../observability/count/counter)
- #### [CachedCounters](../../../observability/count/cached_counters)
- #### [CompositeLogger](../../../observability/log/composite_logger) 
