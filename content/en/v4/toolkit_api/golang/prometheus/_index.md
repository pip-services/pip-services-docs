---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-prometheus-go"
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
Get the package from the Github repository:
```bash
go get -u github.com/pip-services4/pip-services4-go/tree/main/pip-services4-prometheus-go@latest
``````


