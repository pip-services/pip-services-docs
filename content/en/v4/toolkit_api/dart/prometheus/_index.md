---
type: docs
title: "Prometheus module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-prometheus-dart"
no_list: true
weight: 500
description: > 
 Components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both, in client mode through PushGateway and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - default factories for constructing components.
- [**Count**](count) - components of counters (metrics) used to send data to Prometheus via PushGateway.
- [**Controllers**](controllers) - components of the service used to read counters (metrics) from the Prometheus service


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_prometheus: version
```

Now you can install package from the command line:
```bash
pub get
```


