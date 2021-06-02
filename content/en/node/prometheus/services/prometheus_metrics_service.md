---
type: docs
title: "PrometheusMetricsService"
linkTitle: "PrometheusMetricsService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-prometheus-nodex"
description: >
    Service that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to obtain performance metrics.
---

**Extends:** [RestService](../../../rpc/services/rest_service)

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
Creates a new instance of this service.

> `public` constructor()


### Instance methods

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void 

- **references**: [IReferences](../../../commons/refer/ireferences)) - references to locate the component dependencies. 

#### register
Registers all service routes in a HTTP endpoint.

> `public` register(): void

### Examples

```typescript
let service = new PrometheusMetricsService();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

await service.open("123");
console.log("The Prometheus metrics service is accessible at http://+:8080/metrics");
```

### See also
- #### [RestService](../../../rpc/services/rest_service)
- #### [RestClient](../../../rpc/clients/rest_client)
