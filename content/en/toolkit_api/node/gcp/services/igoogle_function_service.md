---
type: docs
title: "IGoogleFunctionService"
linkTitle: "IGoogleFunctionService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    An interface used to integrate Google Function services into Google Function containers
    and connect their actions to the function calls.
---

### Description

The IGoogleFunctionService interface allows you to integrate Google Function services into Google Function containers and connect their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the service.  

> getActions(): [GoogleFunctionAction[]](../google_function_action)

- **returns**: [GoogleFunctionAction[]](../google_function_action) - array with supported actions.
