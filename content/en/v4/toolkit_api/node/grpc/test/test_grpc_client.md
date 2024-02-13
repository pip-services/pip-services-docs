---
type: docs
title: "TestGrpcClient"
linkTitle: "TestGrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-grpc-node"
description: >
    GRPC client used for automated testing.
---

**Extends:** [GrpcClient](../../clients/grpc_client)

### Description

The TestGrpcClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestGrpcClient class.

> `public` constructor(clientTypeOrPath: any, clientName?: string, packageOptions?: any)

- **clientTypeOrPath**: any - TODO: add description
- **clientName**: string - TODO: add description
- **packageOptions**: any - TODO: add description


### Instance methods

#### call
Calls a remote method via the HTTP/REST protocol.

> `public` call(method: string, context?: string, request: any = {}): Promise\<any\>

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **request**: any - (optional) request object.
- **returns**: Promise\<T\> - the received result.

