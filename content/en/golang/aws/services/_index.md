---
type: docs
title: "Services"
linkTitle: "Services"
no_list: true
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    This package contains interfaces and classes used to create Lambda services.
---
---

<div class="module-body"> 


### Interfaces

#### [ILambdaService](ilambda_service)
An interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls.

<br>

### Types

#### [CommandableLambdaService](commandable_lambda_service)
Abstract service that receives commands via AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).

#### [LambdaAction](lambda_action)
Defines actions to be executed as Lambda functions


#### [LambdaService](lambda_service)
Abstract service that receives remove calls via the AWS Lambda protocol.

</div>
