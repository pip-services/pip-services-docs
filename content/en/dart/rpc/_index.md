---
type: docs
title: "RPC module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
no_list: true
weight: 30
description: > 
    Remote Procedure Calls for Pip.Services Dart


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    The rpc module provides the synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.
---


### Modules

The module contains the following packages:

- [**Auth**](auth) - authentication and authorization components
- [**Build**](build) - HTTP service factory
- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Connect**](connect) - helper module to retrieve connections for HTTP-based services and clients
- [**Services**](services) - basic implementation of services for connecting via the HTTP/REST protocol and using the Commandable pattern over HTTP
- [**Test**](test) -  a Commandable HTTP client and a REST client that can be used for automated testing


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_rpc: version
```

Now you can install package from the command line:
```bash
pub get
```
