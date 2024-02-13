---
type: docs
title: "Observability module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
no_list: true
weight: 30
description: > 
 
    The Observability module contains observability component definitions that can be used to build applications and services.

---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory to create observability components by their descriptors
- [**Count**](count) - performance counters
- [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
- [**Trace**](trace) - tracing components



### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_commons: version
```

Now you can install package from the command line:
```bash
pub get
```
