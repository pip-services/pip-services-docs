---
type: docs
title: "PrometheusCounters"
linkTitle: "PrometheusCounters"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-prometheus-gox"
description: >
    Performance counters that send their metrics to Prometheus service.


---

**Extends:** [CachedCounters](../../../components/count/cached_counters)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The PrometheusCounters class allows you to create performance counters that send their metrics to Pormetheus service.

Important points

- The component is normally used in passive mode conjunction with [PrometheusMetricsService](../../services/prometheus_metrics_service). Alternatively, when connection parameters are set, it can push metrics to Prometheus PushGateway.


#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol: http or https
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it

- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements



### Constructors

#### NewPrometheusCounters
Creates a new instance of the performance counters.

> NewPrometheusCounters() [*PrometheusCounters]()


### Methods

#### Close
Closes the component and frees used resources.

> (c [*PrometheusCounters]()) Close(ctx context.Context, correlationId string) error

- **ctx**; context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*PrometheusCounters]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is opened.

> (c [*PrometheusCounters]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Open
Opens the component.

> (c [*PrometheusCounters]()) Open(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) -  error or nil no errors occured.


#### Save
Saves the current counters' measurements.

> (c [*PrometheusCounters]()) Save(ctx context.Context, counters [][*ccount.Counter](../../../components/count/counter)) (err error)

- **ctx**: context.Context - operation context.
- **counters**: [][*ccount.Counter](../../../components/count/counter) - current counters measurements to be saved.
- **returns**: (err error) -  error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*PrometheusCounters]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
ctx := context.Background()
counters = NewPrometheusCounters();
counters.Configure(ctx, cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));

counters.Open("123")

counters.Increment(ctx, "mycomponent.mymethod.calls")
timing := counters.BeginTiming(ctx, "mycomponent.mymethod.exec_time")
    ...
timing.EndTiming(ctx)

counters.Dump(ctx)
```

### See also
- #### [RestService](../../../rpc/services/rest_service)
- #### [CommandableHttpService](../../../rpc/services/commandable_http_service)
