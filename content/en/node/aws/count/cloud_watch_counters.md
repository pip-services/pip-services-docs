---
type: docs
title: "CloudWatchCounters"
linkTitle: "CloudWatchCounters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Performance counters that periodically dumps counters to AWS Cloud Watch Metrics.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

**Extends:** [CachedCounters](../../../components/count/cached_counters)

### Description

TODO: add descriptions

#### Configuration parameters
 
- **connections**:                   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id
- **options**:
    - **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
    - **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:context-info:\*:\*:1.0**: (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify counters source
- **\*:discovery:\*:\*:1.0**: (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0**: (optional) Credential stores to resolve credentials requests

### Constructors
Creates a new instance of this counters.

> `public` constructor()


### Instance methods

#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### save
Saves the current counters measurements.

> `protected` save(counters: [Counter[]](../../../components/count/counter)): Promise\<void\>

- **counters**: [Counter[]](../../../components/count/counter) - current counters measurements to be saves.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.



### Examples

```typescript
let counters = new CloudWatchCounters();
counters.config(ConfigParams.fromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
));
counters.setReferences(References.fromTuples(
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), 
    new ConsoleLogger()
));
  
await counters.open("123");
   
counters.increment("mycomponent.mymethod.calls");
let timing = counters.beginTiming("mycomponent.mymethod.exec_time");
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
