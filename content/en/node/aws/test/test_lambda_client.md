---
type: docs
title: "TestLambdaClient"
linkTitle: "TestLambdaClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    AWS Lambda client used for automated testing.
---

**Extends:** [LambdaClient](../../clients/lambda_client)

### Description
TODO: add description

### Constructors
TODO: add description

> `public` constructor()

### Instance methods

#### call
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` call(cmd: string, correlationId: string, params: any = {}): Promise\<any\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.

#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `public` callOneWay(cmd: string, correlationId: string, params: any = {}): Promise\<any\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.
