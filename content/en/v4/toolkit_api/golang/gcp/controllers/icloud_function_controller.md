---
type: docs
title: "ICloudFunctionController"
linkTitle: "ICloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    An interface used to integrate Google Function services into Google Function containers
    and connect their actions to the function calls.
---

### Description

The ICloudFunctionController interface allows you to integrate Google Function controllers into Google Function containers and connect their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the controller.  

> getActions(): [CloudFunctionAction[]](../cloud_function_action)

- **returns**: [CloudFunctionAction[]](../cloud_function_action) - array with supported actions.

