---
type: docs
title: "IAzureFunctionController"
linkTitle: "IAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    An interface used to integrate Azure Function controllers into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionController interface allows you to integrate Azure Function controllers into Azure Function containers and connect their actions to the function calls.

### Instance methods

#### GetActions
Gets all the actions supported by the service.  

> GetActions(): IList<[AzureFunctionAction](../azure_function_action)>

- **returns**: IList<[AzureFunctionAction](../azure_function_action)> - array with supported actions.
