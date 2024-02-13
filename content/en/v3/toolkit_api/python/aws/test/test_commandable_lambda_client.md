---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    AWS Commandable Lambda client used for automated testing.
---

**Implements:** [CommandableLambdaClient](../../clients/commandable_lambda_client)

### Description

The TestCommandableLambdaClient class provides an AWS Commandable Lambda client that can be used for automated testing.

### Constructors
Creates a new instance of this class.

> TestCommandableLambdaClient(base_route: str)

- **base_route**: str - base route

### Instance methods

#### call_command
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> call_command(name: str, correlation_id: Optional[str], params: dict): Any

- **name**: str - an action name
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - command parameters.
- **returns**: Any - action result.

