---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Calls a remote action in AWS Lambda function. Then, the name of the action is added as "cmd" parameter to the action parameters.
---

**Extends:** [CommandableLambdaClient](../../clients/commandable_lambda_client)

### Description

The TestCommandableLambdaClient class is used to call a remote action in AWS Lambda function. Then, the name of the action is added as "cmd" parameter to the action parameters. 

### Constructors
Creates a new instance of this class.

`public` constructor(baseRoute: string)

- **baseRoute**: string - base route

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(name: string, correlationId: string, params: any): Promise\<T\>

- **name**: string - an action name
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.

