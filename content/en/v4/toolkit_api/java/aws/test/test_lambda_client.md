---
type: docs
title: "TestLambdaClient"
linkTitle: "TestLambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    AWS Lambda client used for automated testing.
---

**Extends:** [LambdaClient](../../clients/lambda_client)

### Description
The TestLambdaClient class allows you to create an AWS Lambda client that can be used for automated testing.

### Constructors
Creates an instance of this class.  

> `public` TestLambdaClient()

### Instance methods

#### call
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` <T> T call(Class<T> type, String cmd, [IContext](../../../components/context/icontext) context, Map<String, Object> params)
            throws ApplicationException

- **type**: Class<T> - the class type of data.
- **cmd**: String - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.

#### callOneWay
Calls an AWS Lambda Function action asynchronously without waiting for the response.

> `public` callOneWay(Class<T> type, String cmd, [IContext](../../../components/context/icontext) context, Map<String, Object> params)
            throws ApplicationException

- **type**: Class<T> - the class type of data.
- **cmd**: String - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.
