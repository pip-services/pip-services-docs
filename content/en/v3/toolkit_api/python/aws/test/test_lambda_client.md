---
type: docs
title: "TestLambdaClient"
linkTitle: "TestLambdaClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    AWS Lambda client used for automated testing.
---

**Implements:** [LambdaClient](../../clients/lambda_client)

### Description
The TestLambdaClient class allows you to create an AWS Lambda client that can be used for automated testing.

### Constructors
Creates an instance of this class.  

> TestLambdaClient()

### Instance methods

#### _call
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> call(cmd: str, correlation_id: Optional[str], params: dict = None): Any:

- **cmd**: str - action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Any - action result.

#### call_one_way
Calls an AWS Lambda Function action asynchronously without waiting for the response.

> call_one_way(cmd: str, correlation_id: Optional[str], params: dict = None): Any

- **cmd**: str - action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Any - action result.
