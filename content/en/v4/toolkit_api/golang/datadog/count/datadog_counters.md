---
type: docs
title: "DataDogCounters"
linkTitle: "DataDogCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-datadog-go"
description: >
    Performance counters that send their metrics to a DataDog service.


---

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections

### Constructors

#### NewDataDogCounters
Creates a new instance of the class.

> NewDataDogCounters() [*DataDogCounters]()


### Methods

#### Close
Closes a component and frees used resources.

> (c [*DataDogCounters]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*DataDogCounters]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> (c [*DataDogCounters]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*DataDogCounters]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.


#### Save
Saves the current counters' measurements.

> (c [*DataDogCounters]()) Save(ctx context.Context, counters [[]Counter](../../../observability/count/counter)) error

- **ctx**: context.Context - operation context.
- **counters**: [[]Counter](../../../observability/count/counter) - current counters' measurements to be saved.
- **returns**: error - error or nil if no errors occurred.


#### SetReferences
Sets references to dependent components.

> (c [*DataDogCounters]()) SetReferences(ctx context.Context, refs [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
counters := NewDataDogCounters();
counters.Configure(context.Background(), NewConfigParamsFromTuples(
    "credential.access_key", "827349874395872349875493"
))

err := counters.Open(context.Background(), "123")
  ...

counters.Increment(context.Background(), "mycomponent.mymethod.calls")
timing := counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

  ...

timing.EndTiming(context.Background())

counters.Dump(context.Background())
```


### See also
- #### [RestController](../../../http/controllers/rest_controller)
- #### [CommandableHttpController](../../../http/controllers/commandable_http_controller)

