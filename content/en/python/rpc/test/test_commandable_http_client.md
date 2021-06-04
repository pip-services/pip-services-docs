---
type: docs
title: "TestCommandableHttpClient"
linkTitle: "TestCommandableHttpClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    HTTP client for automated testing.
---

**Implements:** [CommandableHttpClient](../../clients/commandable_http_client)

### Description

The TestCommandableHttpClient class allows you to create a commandable HTTP client for automated testing.

### Constructors
Creates a new instance of the TestCommandableHttpClient class.
> CommandableHttpClient(base_route: str)

- **base_route**: str - base route to the remote method.


### Instance methods

#### call_command
Calls a remote method via HTTP commadable protocol.
The call is made via POST operation and all parameters are sent in the body object.
The complete route to the remote method is defined as baseRoute + "/" + name.

> call_command(name:str, correlation_id: Optional[str], params: Any): Any

- **name**:str - name of the command to call. 
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: Any - command parameters.
- **returns**: Any - command execution result.

