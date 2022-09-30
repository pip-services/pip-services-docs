---
type: docs
title: "PrometheusMetricsService"
linkTitle: "PrometheusMetricsService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-prometheus-gox"
description: >
    Service that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to obtain performance metrics.
---

**Implements:** [RestService](../../../rpc/services/rest_service)

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
 * - **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
 * - **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
 * - **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
 * - **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../../../rpc/services/http_endpoint) reference to expose REST operations
 * - **\*:counters:prometheus:\*:1.0** - [PrometheusCounters](../../count/prometheus_counters) reference to retrieve collected metrics


### Constructors

#### NewPrometheusMetricsService
Creates a new instance of this service.

> NewPrometheusMetricsService() [*PrometheusMetricsService]()


### Methods

#### SetReferences
Sets references to dependent components.

> (c [*PrometheusMetricsService]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies. 

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
- #### [RestService](../../../rpc/services/rest_service)
- #### [RestClient](../../../rpc/clients/rest_client)
