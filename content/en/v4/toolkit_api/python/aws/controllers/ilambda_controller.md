---
type: docs
title: "ILambdaController"
linkTitle: "ILambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    An interface that allows to integrate lambda controllers into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaController interface that allows to integrate lambda controllers into lambda function containers and connect their actions to the function calls. 


### Abstract methods

#### get_actions
Gets all actions supported by the controller.

> `abstractmethod` get_actions(): List[[LambdaAction](../lambda_action)]

- **returns**: List[[LambdaAction](../lambda_action)] - array with supported actions.
