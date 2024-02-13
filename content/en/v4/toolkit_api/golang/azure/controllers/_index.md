---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-azure-go"
description: >
    This package contains interfaces and classes used to create controllers that do operations via the Azure Function protocol.
---
---

<div class="module-body"> 


### Interfaces

#### [IAzureFunctionController](iazure_function_controller)
An interface that allows to integrate Azure Function controllers into Azure Function containers and connect their actions to the function calls.

#### [IAzureFunctionControllerOverrides](iazure_function_controller_overrides)
The IAzureFunctionControllerOverrides interface is used to perform on-demand registrations.
<br>

### Classes

#### [AzureFunctionAction](azure_function_action)
Defines some fields such as action, cmd and schema.


#### [AzureFunctionController](azure_function_controller)
Abstract controller that receives remove calls via the Azure Function protocol.

#### [CommandableAzureFunctionController](commandable_azure_function_controller)
Abstract controller that receives commands via the Azure Function protocol to operations automatically generated for commands defined in ICommandable components.


</div>
