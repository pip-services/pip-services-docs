---
type: docs
title: "gRPC module"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-grpc-node"
no_list: true
weight: 80
description: > 
  This module is used to organize synchronous data exchange using calls through the gRPC protocol. It has implementations of both, the server and client parts.
---


### Packages

The module contains the following packages:

- [**Build**](build) - factories for creating gRPC services
- [**Clients**](clients) - basic client components that use the gRPC protocol and Commandable pattern through gRPC
- [**Controllers**](controllers) - basic service implementations for connecting via the gRPC protocol and using the Commandable pattern via gRPC
- [**Test**](test) - This package contains classes used to define a Commandable GRPC client and a GRPC client that can be used for automated testing.


## Use

Install the NPM package as
```bash
npm install pip-services4-grpc-node --save
```
