---
type: docs
title: "TestCommandableGrpcClient"
linkTitle: "TestCommandableGrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
description: > 
    GRPC client for automated testing.

---

**Extends:** [CommandableGrpcClient](../../clients/commandable_grpc_client)


### Description

The TestCommandableGrpcClient class allows you to create a commandable GRPC client for automated testing.

### Constructors
Creates a new instance of the TestCommandableGrpcClient class.

> `public` TestCommandableGrpcClient(String name)

- **name**: String - a controller name. 


### Instance methods

#### callCommand
Calls a remote method via GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + "." + name.

> `public` <T> T callCommand(Class<T> returnType, String name, [IContext](../../../components/context/icontext) context, Object params)

- **name**: String - a name of the command to call. 
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Object - command parameters.
- **returns**: <T> T - the received result.

