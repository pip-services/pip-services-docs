---
type: docs
title: "ICloudFunctionService"
linkTitle: "ICloudFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    An interface used to integrate Google Function services into Google Function containers
    and connect their actions to the function calls.
---

### Description

The ICloudFunctionService interface allows you to integrate Google Function services into Google Function containers and connect their actions to the function calls.

### Instance methods

#### getActions
Gets all the actions supported by the service.  

> getActions(): [CloudFunctionAction[]](../cloud_function_action)

- **returns**: [CloudFunctionAction[]](../cloud_function_action) - array with supported actions.
