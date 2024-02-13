---
type: docs
title: "IAzureFunctionService"
linkTitle: "IAzureFunctionService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    An interface used to integrate Azure Function services into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionService interface allows you to integrate Azure Function services into Azure Function containers and connect their actions to the function calls.

### Instance methods

#### GetActions
Gets all the actions supported by the service.  

> GetActions(): IList<[AzureFunctionAction](../azure_function_action)>

- **returns**: IList<[AzureFunctionAction](../azure_function_action)> - array with supported actions.
