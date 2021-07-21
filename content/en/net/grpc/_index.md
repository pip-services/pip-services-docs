---
type: docs
title: "gRPC module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
no_list: true
weight: 30
description: > 
    GRPC components for Pip.Services in .NET. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

    It is used to organize synchronous data exchange using calls through the gRPC protocol. It has implementations of both, the server and client parts.
---


### Packages

The module contains the following packages:

- [**Build**](build) - factories for creating gRPC services
- [**Clients**](clients) - basic client components that use the gRPC protocol and Commandable pattern through gRPC
- [**Services**](services) - basic service implementations for connecting via the gRPC protocol and using the Commandable pattern via gRPC


## Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Grpc
```

TODO: add example
