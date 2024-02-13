---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    This package contains interfaces and classes used to create Lambda services.
---
---

<div class="module-body"> 


### Interfaces

#### [ILambdaController](ilambda_controller)
An interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls.

<br>

### Classes

#### [CommandableLambdaController](commandable_lambda_controller)
Abstract service that receives commands via AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../rpc/commands/icommandable) components.

#### [LambdaAction](lambda_action)
Defines actions to be executed as Lambda functions


#### [LambdaController](lambda_controller)
Abstract service that receives remove calls via the AWS Lambda protocol.

</div>
