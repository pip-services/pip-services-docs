---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    This package contains interfaces and classes used to create Lambda controllers.
---
---

<div class="module-body"> 


### Interfaces

#### [ILambdaController](ilambda_controller)
An interface that allows to integrate lambda controllers into lambda function containers and connect their actions to the function calls.

<br>

### Types

#### [CommandableLambdaController](commandable_lambda_controller)
Abstract controller that receives commands via AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable).

#### [LambdaAction](lambda_action)
Defines actions to be executed as Lambda functions


#### [LambdaController](lambda_controller)
Abstract controller that receives remove calls via the AWS Lambda protocol.

</div>

