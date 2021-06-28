---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-prometheus-dotnet"
no_list: true
weight: 30
description: > 
    Prometheus components for Pip.Services in .NET

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    This module contains components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Services**](services) - components of the service used to read counters (metrics) from the Prometheus service


### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Prometheus
```

TODO add example

