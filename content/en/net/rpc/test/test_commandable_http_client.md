---
type: docs
title: "TestCommandableHttpClient"
linkTitle: "TestCommandableHttpClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    HTTP client for automated testing.
---

**Inherits:** [CommandableHttpClient](../../clients/commandable_http_client)

### Description

The TestCommandableHttpClient class allows you to create a commandable HTTP client for automated testing.

### Constructors
Creates a new instance of the TestCommandableHttpClient class.
> `public` TestCommandableHttpClient(string baseRoute)

- **baseRoute**: string - base route to the remote method.


### Instance methods

#### CallCommandAsync
Calls a remote method via HTTP commadable protocol.
The call is made via POST operation and all parameters are sent in the body object.
The complete route to the remote method is defined as baseRoute + "/" + name.

> `public new` Task\<T\> CallCommandAsync\<T\>(string route, string correlationId, object requestEntity)

- **name**:string - name of the command to call. 
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **requestEntity**: object - body object.
- **returns**: Task\<T\> - command execution result.

