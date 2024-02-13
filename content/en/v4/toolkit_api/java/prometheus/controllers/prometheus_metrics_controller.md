---
type: docs
title: "PrometheusMetricsController"
linkTitle: "PrometheusMetricsController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-prometheus-java"
description: >
    Controller that exposes the **"/metrics"** and **"/metricsandreset"** routes 
    for Prometheus to obtain performance metrics.
---

**Extends:** [RestController](../../../http/controllers/rest_controller)

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
 * - **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../../../http/controllers/http_endpoint) reference to expose REST operations
 * - **\*:counters:prometheus:\*:1.0** - [PrometheusCounters](../../count/prometheus_counters) reference to retrieve collected metrics


### Constructors
Creates a new instance of this service.

> `public` PrometheusMetricsController()


### Instance methods

#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException 

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies. 

#### register
Registers all service routes in a HTTP endpoint.

> `public` void register()

### Examples



### See also
- #### [RestController](../../../http/controllers/rest_controller)
- #### [RestClient](../../../http/clients/rest_client)
