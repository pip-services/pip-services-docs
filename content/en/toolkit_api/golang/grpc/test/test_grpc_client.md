---
type: docs
title: "TestGrpcClient"
linkTitle: "TestGrpcClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-grpc-go"
description: >
    GRPC client used for automated testing.
---

**Implements:** [GrpcClient](../../clients/grpc_client)

### Description

The TestGrpcClient class allows you to create a REST client that can be used for automated testing.

### Constructors

#### NewTestGrpcClient
Creates a new instance of the TestGrpcClient class.

> NewTestGrpcClient(name string) [*TestGrpcClient]()

- **name**: string - service name.