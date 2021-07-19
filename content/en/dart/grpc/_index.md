---
type: docs
title: "gRPC module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
no_list: true
weight: 30
description: > 
    GRPC components for Pip.Services in Dart

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

    The grpc module is used to organize synchronous data exchange using calls through the gRPC protocol. It has implementations of both, the server and client parts.
---


### Packages

The module contains the following packages:

- [**Build**](build) - factories for creating gRPC services
- [**Clients**](clients) - basic client components that use the gRPC protocol and Commandable pattern through gRPC
- [**Services**](services) - basic service implementations for connecting via the gRPC protocol and using the Commandable pattern via gRPC


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_grpc: version
```

Now you can install package from the command line:
```bash
pub get
```
