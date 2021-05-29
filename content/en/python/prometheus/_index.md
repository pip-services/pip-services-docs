---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
no_list: true
description: > 
    Prometheus components for Python. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    This module contains components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - the default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Services**](services) - components of the service use to read counters (metrics) from the Prometheus service


### Use

Install the Python package as
```bash
pip install pip-services3-prometheus
```
TODO: add example
