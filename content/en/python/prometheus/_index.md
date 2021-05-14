---
type: docs
title: "Postgres"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
no_list: true
description: > 
    Prometheus components for Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    The module contains components for working with meters in the Prometheus service. The PrometheusCounters and PrometheusMetricsService components allow you to work both in client mode through PushGateway, and as a service.
---

### Packages

The module contains the following packages:
- [**Build**](build) - the default factories for constructing components.
- [**Count**](count) - components of counters (metrics) with sending data to Prometheus via PushGateway
- [**Services**](services) - components of the service for reading counters (metrics) by the Prometheus service


### Use

Install the Python package as
```bash
pip install pip_services3_prometheus
```

### Develop

For development you shall install the following prerequisites:
* Python 3.7+
* Visual Studio Code or another IDE of your choice
* Docker

Install dependencies:
```bash
pip install -r requirements.txt
```

Run automated tests:
```bash
python test.py
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

### Contacts

The module is created and maintained by:
- **Sergey Seroukhov**
- **Danil Prisiazhnyi**