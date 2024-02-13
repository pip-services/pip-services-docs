---
type: docs
title: "IAzureFunctionController"
linkTitle: "IAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    An interface used to integrate Azure Function services into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionController interface allows you to integrate Azure Function services into Azure Function containers and connect their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the service.  

> List<AzureFunctionAction> getActions()

- **returns**: List<[AzureFunctionAction[]](../azure_function_action)> - list with supported actions.
