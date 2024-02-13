---
type: docs
title: "ICloudFunctionService"
linkTitle: "ICloudFunctionService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    An interface used to integrate Google Function services into Google Function containers
    and connect their actions to the function calls.
---

### Description

The ICloudFunctionService interface allows you to integrate Google Function services into Google Function containers and connect their actions to the function calls.

### Instance methods

#### GetActions
Gets all the actions supported by the service.  

> List<[CloudFunctionAction](../cloud_function_action)> GetActions();

- **returns**: List<[CloudFunctionAction](../cloud_function_action)> - array with supported actions.
