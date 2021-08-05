---
type: docs
title: "TestCommandableGrpcClient"
linkTitle: "TestCommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
description: > 
    GRPC client for automated testing.

---

**Implements:** [CommandableGrpcClient](../commandable_grpc_client)


### Description

The TestCommandableGrpcClient class allows you to create a commandable GRPC client for automated testing.

### Constructors
Creates a new instance of the TestCommandableGrpcClient class.

> TestCommandableGrpcClient(name: str)

- **name**: str - a service name. 


### Instance methods

#### call_command
Calls a remote method via GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + "." + name.

> call_command(name: str, correlation_id: str, params: Any): Any

- **name**: str - a name of the command to call. 
- **correlation_id**: str - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - command parameters.
- **returns**: Any - the received result.

