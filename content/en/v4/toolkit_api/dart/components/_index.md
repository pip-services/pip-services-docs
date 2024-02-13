---
type: docs
title: "Components module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
no_list: true
weight: 40
description: > 
    It defines a portable component model interfaces and provides utility classes to handle component lifecycle.
---


### Packages

The module contains the following packages:

* [**Build**](build) - basic factories for constructing objects
* [**Config**](config) - configuration readers and managers, whose main task is to deliver configuration parameters to the application from wherever they are being stored
* [**Context**](context) - contains a simple object that defines the context of execution
* [**Exec**](exec) - connection discovery and configuration services
* [**Refer**](refer) - this package provides interfaces and classes used to create different types of tracers
* [**Run**](run) - the root package



### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_components: version
```

Now you can install package from the command line:
```bash
pub get
```


