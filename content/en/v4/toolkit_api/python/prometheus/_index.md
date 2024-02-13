---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
no_list: true
weight: 500
description: > 
    Components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Controllers**](controllers) - components of the controller used to read counters (metrics) from the Prometheus controller


### Use

Install the Python package as
```bash
pip install pip-services4-prometheus
```


