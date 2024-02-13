---
type: docs
title: "DataDogCounters"
linkTitle: "DataDogCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: >
    Performance counters that send their metrics to a DataDog service.


---

**Inherits:** [CachedCounters](../../../observability/count/cached_counters/), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

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

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.

### Constructors
Creates a new instance of the class.

> `public` DataDogCounters()


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Save
Saves the current counters' measurements.

> `protected override` void Save(IEnumerable<[Counter](../../../observability/count/counter)> counters)

- **counters**: IEnumerable<[Counter](../../../observability/count/counter)> - current counters' measurements to be saved.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```cs
var counters = new DataDogCounters();
counters.Configure(ConfigParams.FromTuples(
    "credential.access_key", "827349874395872349875493"
));
await counters.OpenAsync("123");

counters.Increment("mycomponent.mymethod.calls");
let timing = counters.BeginTiming("mycomponent.mymethod.exec_time");
try {
    ...
} finally {
    timing.EndTiming();
}
counters.Dump();
```


### See also
- #### [RestController](../../../http/controller/rest_controller)
- #### [CommandableHttpController](../../../http/controllers/commandable_http_controller)
