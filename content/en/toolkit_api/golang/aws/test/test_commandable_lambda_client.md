---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    AWS Commandable Lambda client used for automated testing.
---

**Extends:** [CommandableLambdaClient](../../clients/commandable_lambda_client)

### Description

The TestCommandableLambdaClient class provides an AWS Commandable Lambda client that can be used for automated testing.

### Constructors
Creates a new instance of this class.

`public` constructor(baseRoute: string)

- **baseRoute**: string - base route

### Methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(name: string, correlationId: string, params: any): Promise\<T\>

- **name**: string - action name
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.

