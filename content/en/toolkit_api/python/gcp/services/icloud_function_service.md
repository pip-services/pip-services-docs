---
type: docs
title: "ICloudFunctionService"
linkTitle: "ICloudFunctionService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    An interface used to integrate Google Function services into Google Function containers
    and connect their actions to the function calls.
---

### Description

The ICloudFunctionService interface allows you to integrate Google Function services into Google Function containers and connect their actions to the function calls.

### Instance methods

#### get_actions
Gets all the actions supported by the service.  

> get_actions(): List[[CloudFunctionAction](../cloud_function_action)]

- **returns**: List[[CloudFunctionAction](../cloud_function_action)] - array with supported actions.
