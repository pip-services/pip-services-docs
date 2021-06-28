---
type: docs
title: "PrometheusCounters"
linkTitle: "PrometheusCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-prometheus-dotnet"
description: >
    Performance counters that send their metrics to Prometheus service.


---

**Inherits:** [CachedCounters](../../../components/count/cached_counters), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)


### Description

The PrometheusCounters class allows you to create performance counters that send their metrics to Pormetheus service.

Important points

- The component is normally used in passive mode conjunction with [PrometheusMetricsService](../../services/prometheus_metrics_service). Alternatively, when connection parameters are set, it can push metrics to Prometheus PushGateway.


#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**options**:
- **retries**: number of retries (default: 3)
- **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
- **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements



### Constructors
Creates a new instance of the performance counters.

> `public` constructor()


### Instance methods

#### CloseAsync
Closes the component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - True if the component is open and False otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Save
Saves the current counters' measurements.

> `protected override` void Save(IEnumerable<[Counter](../../../components/count/counter)> counters)

- **counters**: IEnumerable<[Counter](../../../components/count/counter)> - current counters measurements to be saved.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```cs
var counters = new PrometheusCounters();
counters.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 ));

counters.Open("123");

counters.Increment("mycomponent.mymethod.calls");
var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");
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
