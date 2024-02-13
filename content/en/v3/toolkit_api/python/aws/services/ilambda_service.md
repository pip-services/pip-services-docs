---
type: docs
title: "ILambdaService"
linkTitle: "ILambdaService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    An interface that allows to integrate lambda services into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaService interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls. 


### Abstract methods

#### get_actions
Gets all actions supported by the service.

> `abstractmethod` get_actions(): List[[LambdaAction](../lambda_action)]

- **returns**: List[[LambdaAction](../lambda_action)] - array with supported actions.
