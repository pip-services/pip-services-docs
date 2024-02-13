---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    This package contains interfaces and classes used to create services that do operations via the Google Function protocol.
---
---

<div class="module-body"> 


### Interfaces

#### [ICloudFunctionController](icloud_function_controller)
An interface that allows to integrate Google Function services into Google Function containers and connect their actions to the function calls.

<br>

### Classes

#### [CloudFunctionAction](cloud_function_action)
Defines some fields such as action, cmd and schema.


#### [CloudFunctionController](cloud_function_controller)
Abstract service that receives remove calls via the Google Function protocol.

#### [CommandableCloudFunctionController](commandable_cloud_function_controller)
Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in ICommandable components.


</div>

