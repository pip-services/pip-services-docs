---
type: docs
title: "DataDogCounters"
linkTitle: "DataDogCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-datadog-node"
description: >
    Performance counters that send their metrics to a DataDog service.


---

**Extends:** [CachedCounters](../../../observability/count/cached_counters/)

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description
The DataDogCounters class allows you to create performance counters that send their metrics to a DataDog service.


#### Configuration parameters

- **connection(s)**:           
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
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

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection

### Constructors
Creates a new instance of the class.

> `public` constructor()


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(context: string): Promise\<void\>

- **context**: string - (optional) Basic implementation of an execution context.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) Basic implementation of an execution context..

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` open(context: [Context](../../../components/context/context)): Promise\<void\>

- **context**: [Context](../../../components/context/context) - (optional) Basic implementation of an execution context.


#### save
Saves the current counters' measurements.

> `protected` save(counters: [Counter[]](../../../observability/count/counter)): void

- **counters**: [Counter[]](../../../observability/count/counter) - current counters' measurements to be saved.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


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
- #### [RestController](../../../http/controllers/rest_controller)
- #### [CommandableHttpController](../../../http/controllers/commandable_http_controller)
