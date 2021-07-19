---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

**Extends:** [CachedCounters](../../../components/count/cached_counters)

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

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### save
Saves the current counters' measurements.

`@override`
> Future save(List<[Counter](../../../components/count/counter)> counters)

- **counters**: List<[Counter](../../../components/count/counter)> - current counters' measurements to be saved.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



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
var timing = counters.beginTiming('mycomponent.mymethod.exec_time');
try {
    ...
} finally {
    timing.endTiming();
}
counters.dump();
```

### See also
- #### [Counter](../../../components/count/counter)
- #### [CachedCounters](../../../components/count/cached_counters)
- #### [CompositeLogger](../../../components/log/composite_logger) 
