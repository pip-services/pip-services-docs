---
type: docs
title: "ILambdaController"
linkTitle: "ILambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    An interface that allows to integrate lambda services into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaController interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls. 


### Instance methods

#### getActions
Gets all actions supported by the service.

> getActions(): [LambdaAction[]](../lambda_action)

- **returns**: [LambdaAction[]](../lambda_action) - array with supported actions.
