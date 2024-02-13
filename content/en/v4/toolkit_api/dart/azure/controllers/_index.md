---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    This package contains interfaces and classes used to create services that do operations via the Azure Function protocol.
---
---

<div class="module-body"> 


### Interfaces

#### [IAzureFunctionController](iazure_function_controller)
An interface that allows to integrate Azure Function services into Azure Function containers and connect their actions to the function calls.

<br>

### Classes

#### [AzureFunctionAction](azure_function_action)
Defines some fields such as action, cmd and schema.


#### [AzureFunctionController](azure_function_controller)
Abstract service that receives remove calls via the Azure Function protocol.

#### [CommandableAzureFunctionController](commandable_azure_function_controller)
Abstract service that receives commands via the Azure Function protocol to operations automatically generated for commands defined in ICommandable components.


</div>

