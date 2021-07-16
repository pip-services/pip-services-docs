---
type: docs
title: "ILambdaService"
linkTitle: "ILambdaService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    An interface that allows to integrate lambda services into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaService interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls. 


### Methods

#### GetActions
Gets all actions supported by the service.

> GetActions() [[]*LambdaAction](../lambda_action)

- **returns**: [[]*LambdaAction](../lambda_action) - array with supported actions.
