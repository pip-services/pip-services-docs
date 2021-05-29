---
type: docs
title: "PrometheusCounters"
linkTitle: "PrometheusCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
description: >
    Performance counters that send their metrics to Prometheus service.


---

**Implements:** [CachedCounters](../../../components/count/cached_counters), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The PrometheusCounters class allows you to create performance counters that send their metrics to Pormetheus service.

Important points

- The component is normally used in passive mode in conjunction with [PrometheusMetricsService](../../services/prometheus_metrics_service). Alternatively, when connection parameters are set, it can push metrics to Prometheus PushGateway.


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

> PrometheusCounters()


### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _save
Saves the current counters' measurements.

> _save(counters: List[[Counter](../../../components/count/counter)])

- **counters**: List[[Counter](../../../components/count/counter)] - current counters measurements to be saved.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```python
counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters.open("123")

counters.increment("mycomponent.mymethod.calls")
timing = counters.begin_timing("mycomponent.mymethod.exec_time")
try:
    ...
finally:
    timing.end_timing()

counters.dump()
```

### See also
- #### [RestService](../../../rpc/services/rest_service)
- #### [CommandableHttpService](../../../rpc/services/commandable_http_service)
