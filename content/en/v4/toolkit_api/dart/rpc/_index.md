---
type: docs
title: "RPC module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rpc-dart"
no_list: true
weight: 70
description: > 
    Provides synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.
---


### Modules

The module contains the following packages:

- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Commands**](commands) - commanding and eventing patterns
- [**Trace**](trace) - logging and tracing utilities



### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_rpc: version
```

Now you can install package from the command line:
```bash
pub get
```

