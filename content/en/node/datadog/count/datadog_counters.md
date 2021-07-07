---
type: docs
title: "DataDogCounters"
linkTitle: "DataDogCounters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-datadog-nodex"
description: >
    Performance counters that send their metrics to DataDog service.


---

**Extends:** [CachedCounters](../../../rpc/services/rest_client)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IReferenceable](../../../commons/run/iopenable)

### Description

DataDog is a popular monitoring SaaS service. It collects logs, metrics, events
from infrastructure and applications and analyze them in a single place.

#### Configuration parameters

- **connection(s)**:           
  - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
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

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0**: (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection

### Constructors
Creates a new instance of the performance counters.

> `public` constructor()


### Instance methods

#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id to trace execution through call chain.

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

> `protected` save(counters: [Counter[]](../../../components/count/counter)): void

- **counters**: [Counter[]](../../../components/count/counter) - current counters measurements to be saves.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
let counters = new DataDogCounters();
counters.configure(ConfigParams.fromTuples(
    "credential.access_key", "827349874395872349875493"
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
- #### [RestService](../../../rpc/services/rest_service)
- #### [CommandableHttpService](../../../rpc/services/commandable_http_service)