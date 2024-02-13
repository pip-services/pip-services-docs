---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
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

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(name: string, context: [IContext](../../../components/context/icontext), params: any): Promise\<T\>

- **name**: string - an action name
- **correlation**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.

