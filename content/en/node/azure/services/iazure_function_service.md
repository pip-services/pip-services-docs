---
type: docs
title: "IAzureFunctionService"
linkTitle: "IAzureFunctionService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    An interface that allows to integrate Azure Function services into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionService interface allows for integration of Azure Function services into Azure Function containers and the connection of their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the service.  

> getActions(): [AzureFunctionAction[]](../azure_function_action)

- **returns**: [AzureFunctionAction[]](../azure_function_action) - array with supported actions.
