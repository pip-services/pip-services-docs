---
type: docs
title: "TestGrpcClient"
linkTitle: "TestGrpcClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
description: >
    GRPC client used for automated testing.
---

**Extends:** [GrpcClient](../../clients/grpc_client)

### Description

The TestGrpcClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestGrpcClient class.

> TestGrpcClient(client_name: str = None)

- **client_name**: str - TODO: add description


### Instance methods

#### call
Calls a remote method via the HTTP/REST protocol.

> call(method: str, correlation_id: str, request: dict = {}): Any

- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **correlationId**: str - (optional) transaction id used to trace execution through the call chain.
- **request**: Any - (optional) request object.
- **returns**: Any - the received result.

