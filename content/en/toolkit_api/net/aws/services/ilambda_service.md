---
type: docs
title: "ILambdaService"
linkTitle: "ILambdaService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    An interface that allows to integrate lambda services into lambda function containers
    and connect their actions to the function calls.
---

### Description

The ILambdaService interface that allows to integrate lambda services into lambda function containers and connect their actions to the function calls. 


### Instance methods

#### GetActions
Gets all actions supported by the service.

> IList\<[LambdaAction](../lambda_action)\> GetActions()

- **returns**: [LambdaAction](../lambda_action) - array with supported actions.
