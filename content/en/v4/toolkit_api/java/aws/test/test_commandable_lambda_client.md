---
type: docs
title: "TestCommandableLambdaClient"
linkTitle: "TestCommandableLambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    AWS Commandable Lambda client used for automated testing.
---

**Extends:** [CommandableLambdaClient](../../clients/commandable_lambda_client)

### Description

The TestCommandableLambdaClient class provides an AWS Commandable Lambda client that can be used for automated testing.

### Constructors
Creates a new instance of this class.

`public` TestCommandableLambdaClient(String baseRoute)

- **baseRoute**: String - base route

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` <T> T callCommand(Class<T> type, String cmd, [IContext](../../../components/context/icontext) context, Map<String, Object> params)
            throws ApplicationException

- **type**: Class<T> - the class type of data.
- **name**: String - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - command parameters.
- **returns**: \<T\> - action result.

