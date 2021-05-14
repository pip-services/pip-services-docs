---
type: docs
title: "PrometheusMetricsService"
linkTitle: "PrometheusMetricsService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
description: >
    Service that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to scap performance metrics.
---

**Implements:** [RestService](../../../rpc/services/rest_service)

See also [RestService](../../../rpc/services/rest_service), [RestClient](../../../rpc/clients/rest_client)


#### Configuration parameters

**dependencies**:
- **endpoint**: override for HTTP Endpoint dependency
- **prometheus_counters**: override for PrometheusCounters dependency

**connection(s)**:
- **discovery_key**: (optional) a key to retrieve the connection from IDiscovery
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it


#### References
 * - **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
 * - **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
 * - **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection
 * - **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../../../rpc/services/http_endpoint) reference to expose REST operation
 * - **\*:counters:prometheus:\*:1.0** - [PrometheusCounters](../../count/prometheus_counters) reference to retrieve collected metrics

**Example:**
```python
    service = PrometheusMetricsService()

    service.configure(ConfigParams.from_tuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ))

    try:
        service.open("123")
        print("The Prometheus metrics service is accessible at http://+:8080/metrics")
    except Exception as err:
        # do something
```

### Constructors
Creates a new instance of this service.

> PrometheusMetricsService()


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### register
Registers all service routes in HTTP endpoint.

> register()



### See also
- #### [RestService](../../../rpc/services/rest_service)
- #### [RestClient](../../../rpc/clients/rest_client)
