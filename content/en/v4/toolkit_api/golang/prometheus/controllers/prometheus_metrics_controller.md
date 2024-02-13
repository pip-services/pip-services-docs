---
type: docs
title: "PrometheusMetricsController"
linkTitle: "PrometheusMetricsController"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-prometheus-gox"
description: >
    Service that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to obtain performance metrics.
---

**Implements:** [RestController](../../../http/controllers/rest_controller)

### Description

The PrometheusMetricsService class allows you to create services that expose the **"/metrics"** and **"/metricsandreset"** routes for Prometheus to obtain performance metrics.

#### Configuration parameters

**dependencies**:
- **endpoint**: override for HTTP Endpoint dependency
- **prometheus_counters**: override for PrometheusCounters dependency

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from IDiscovery
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it


#### References
 * - **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
 * - **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
 * - **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections
 * - **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../../../config/connect/idiscovery) reference to expose REST operations
 * - **\*:counters:prometheus:\*:1.0** - [PrometheusCounters](../../count/prometheus_counters) reference to retrieve collected metrics


### Constructors

#### NewPrometheusMetricsService
Creates a new instance of this service.

> NewPrometheusMetricsService() [*PrometheusMetricsService]()


### Methods

#### SetReferences
Sets references to dependent components.

> (c [*PrometheusMetricsService]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies. 

#### Register
Registers all service routes in a HTTP endpoint.

> (c [*PrometheusMetricsService]()) Register()

### Examples

```go
ctx := context.Context()
service := NewPrometheusMetricsService()
service.Configure(ctx, cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", "8080",
));

err := service.Open(ctx, "123")
if  err == nil {
    fmt.Println("The Prometheus metrics service is accessible at http://localhost:8080/metrics");
    defer service.Close(ctx, "")
}
```

### See also
- #### [RestController](../../../http/controllers/rest_controller)
- #### [RestClient](../../../http/clients/rest_client)

