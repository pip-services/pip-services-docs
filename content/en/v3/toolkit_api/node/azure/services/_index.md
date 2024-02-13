---
type: docs
title: "Services"
linkTitle: "Services"
no_list: true
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    This package contains interfaces and classes used to create services that do operations via the Azure Function protocol.
---
---

<div class="module-body"> 


### Interfaces

#### [IAzureFunctionService](iazure_function_service)
An interface that allows to integrate Azure Function services into Azure Function containers and connect their actions to the function calls.

<br>

### Classes

#### [AzureFunctionAction](azure_function_action)
Defines some fields such as action, cmd and schema.


#### [AzureFunctionService](azure_function_service)
Abstract service that receives remove calls via the Azure Function protocol.

#### [CommandableAzureFunctionService](commandable_azure_function_service)
Abstract service that receives commands via the Azure Function protocol to operations automatically generated for commands defined in ICommandable components.


</div>
