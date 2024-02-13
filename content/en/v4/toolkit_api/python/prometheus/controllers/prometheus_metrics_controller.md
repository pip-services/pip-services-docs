---
type: docs
title: "PrometheusMetricsController"
linkTitle: "PrometheusMetricsController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-prometheus-python"
description: >
    Controller that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to obtain performance metrics.
---

**Implements:** [RestController](../../../http/controller/rest_controller)

### Description

The PrometheusMetricsController class allows you to create controllers that expose the **"/metrics"** and **"/metricsandreset"** routes for Prometheus to obtain performance metrics.

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
 * - **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../../../http/controller/http_endpoint) reference to expose REST operations
 * - **\*:counters:prometheus:\*:1.0** - [PrometheusCounters](../../count/prometheus_counters) reference to retrieve collected metrics


### Constructors
Creates a new instance of this controller.

> PrometheusMetricsController()


### Instance methods

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences)) 

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies. 

#### register
Registers all controller routes in a HTTP endpoint.

> register()

### Examples

```python
    controller = PrometheusMetricsController()

    controller.configure(ConfigParams.from_tuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ))

    try:
        controller.open("123")
        print("The Prometheus metrics controller is accessible at http://+:8080/metrics")
    except Exception as err:
        # do something
```

### See also
- #### [RestController](../../../http/controller/rest_controller)
- #### [RestClient](../../../http/clients/rest_client)
