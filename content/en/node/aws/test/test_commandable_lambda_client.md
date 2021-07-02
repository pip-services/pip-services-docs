---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    TODO: add description
---

**Extends:** [CommandableLambdaClient](../../clients/commandable_lambda_client)

### Description

TODO: add descriptions

### Constructors
TODO: add description

`public` constructor(baseRoute: string)

- **baseRoute**: string - TODO: add description

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(name: string, correlationId: string, params: any): Promise\<T\>

- **name**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.

