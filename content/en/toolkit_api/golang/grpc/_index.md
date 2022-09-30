---
type: docs
title: "gRPC module"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-grpc-gox"
no_list: true
weight: 80
description: > 
  This module is used to organize synchronous data exchange using calls through the gRPC protocol. It has implementations of both, the server and client parts.
---


### Packages

The module contains the following packages:

- [**Build**](build) - factories for creating gRPC services
- [**Clients**](clients) - basic client components that use the gRPC protocol and Commandable pattern through gRPC
- [**Services**](services) - basic service implementations for connecting via the gRPC protocol and using the Commandable pattern via gRPC


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-gox/pip-services3-grpc-gox@latest
```
