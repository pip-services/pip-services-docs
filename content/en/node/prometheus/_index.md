---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-prometheus-nodex"
no_list: true
description: > 
    Prometheus components for nodex. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    This module contains components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Services**](services) - components of the service used to read counters (metrics) from the Prometheus service


### Use

Install the NPM package as
```bash
npm install pip-services3-prometheus-nodex --save
```

TODO add example

