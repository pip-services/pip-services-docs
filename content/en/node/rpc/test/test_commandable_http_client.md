---
type: docs
title: "TestCommandableHttpClient"
linkTitle: "TestCommandableHttpClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    HTTP client for automated testing.
---

**Extends:** [CommandableHttpClient](../../clients/commandable_http_client)

### Description

The TestCommandableHttpClient class allows you to create a commandable HTTP client for automated testing.

### Constructors
Creates a new instance of the TestCommandableHttpClient class.
> `public` constructor(baseRoute: string)

- **baseRoute**: string - base route to the remote method.


### Instance methods

#### callCommand
Calls a remote method via HTTP commadable protocol.
The call is made via POST operation and all parameters are sent in the body object.
The complete route to the remote method is defined as baseRoute + "/" + name.

> `public` callCommand\<T\>(name:string, correlationId: string, params: any): Promise\<T\>

- **name**:string - name of the command to call. 
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - command execution result.

