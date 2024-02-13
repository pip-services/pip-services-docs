---
type: docs
title: "ILambdaController"
linkTitle: "ILambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    An interface that allows to integrate lambda controllers into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaController interface that allows to integrate lambda controllers into lambda function containers and connect their actions to the function calls. 


### Methods

#### GetActions
Gets all actions supported by the controller.

> GetActions() [[]*LambdaAction](../lambda_action)

- **returns**: [[]*LambdaAction](../lambda_action) - array with supported actions.

