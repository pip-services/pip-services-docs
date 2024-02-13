---
type: docs
title: "TestGrpcClient"
linkTitle: "TestGrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
description: >
    GRPC client used for automated testing.
---

**Extends:** [GrpcClient](../../clients/grpc_client)

### Description

The TestGrpcClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestGrpcClient class.

> `public` public TestGrpcClient(io.grpc.ServiceDescriptor serviceDescriptor)


### Instance methods

#### call
Calls a remote method via the HTTP/REST protocol.

> `public` <TRequest, TResponse> TResponse call(String methodName, [IContext](../../../components/context/icontext) context, TRequest request)

- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **request**: TRequest - (optional) request object.
- **returns**: <TRequest, TResponse> TResponse - the received result.

