---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-prometheus-java"
no_list: true
weight: 500
description: > 
 Components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsController components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Controllers**](controllers) - components of the controller for reading counters (metrics) by the Prometheus controller


### Use

Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-prometheus</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
