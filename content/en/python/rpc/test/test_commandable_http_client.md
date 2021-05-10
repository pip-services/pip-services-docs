---
type: docs
title: "TestCommandableHttpClient"
linkTitle: "TestCommandableHttpClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    TODO add description
---

**Implements:** [CommandableHttpClient](../../clients/commandable_http_client)

### Constructors
TODO add description

> CommandableHttpClient(base_route: str)

- **base_route**: str - TODO add description


### Methods

#### call_command
Calls a remote method via HTTP commadable protocol.
The call is made via POST operation and all parameters are sent in body object.
The complete route to remote method is defined as baseRoute + "/" + name.

> call_command(name:str, correlation_id: Optional[str], params: Any): Any

- **name**:str - a name of the command to call. 
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through the call chain.
- **params**: Any - command parameters.
- **returns**: Any - a command execution result.

