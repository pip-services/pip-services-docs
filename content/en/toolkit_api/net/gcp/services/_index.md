---
type: docs
title: "Services"
linkTitle: "Services"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    This package contains interfaces and classes used to create services that do operations via the Google Function protocol.
---
---

<div class="module-body"> 


### Interfaces

#### [ICloudFunctionService](icloud_function_service)
An interface that allows to integrate Google Function services into Google Function containers and connect their actions to the function calls.

<br>

### Classes

#### [CloudFunctionAction](cloud_function_action)
Defines some fields such as action, cmd and schema.


#### [CloudFunctionService](cloud_function_service)
Abstract service that receives remove calls via the Google Function protocol.

#### [CommandableCloudFunctionService](commandable_cloud_function_service)
Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in ICommandable components.


</div>
