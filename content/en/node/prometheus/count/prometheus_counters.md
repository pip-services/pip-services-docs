---
type: docs
title: "PrometheusCounters"
linkTitle: "PrometheusCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
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

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> isOpen(): boolean

- **returns**: boolean - True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### save
Saves the current counters' measurements.

> `protected` save(counters: [Counter](../../../components/count/counter)[]): void

- **counters**: [Counter](../../../components/count/counter)[] - current counters measurements to be saved.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
let counters = new PrometheusCounters();
counters.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
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
