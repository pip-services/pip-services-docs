---
type: docs
title: "IAzureFunctionController"
linkTitle: "IAzureFunctionController"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
description: >
    An interface used to integrate Azure Function controllers into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionController interface allows you to integrate Azure Function controllers into Azure Function containers and connect their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the service.  

> `abstractmethod` get_actions(): List[[AzureFunctionAction](../azure_function_action)]

- **returns**: List[[AzureFunctionAction](../azure_function_action)] - array with supported actions.
