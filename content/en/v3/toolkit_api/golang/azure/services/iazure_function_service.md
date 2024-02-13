---
type: docs
title: "IAzureFunctionService"
linkTitle: "IAzureFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    An interface used to integrate Azure Function services into Azure Function containers
    and connect their actions to the function calls.
---

### Description

The IAzureFunctionService interface allows you to integrate Azure Function services into Azure Function containers and connect their actions to the function calls.

### Instance methods

#### GetActions
Gets all the actions supported by the service.  

> GetActions() [[]*AzureFunctionAction](../azure_function_action)

- **returns**: [[]*AzureFunctionAction](../azure_function_action) - array with supported actions.
