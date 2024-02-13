---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-azure-go"
description: >
    This package contains classes used to create different types of clients for Azure.
---
---

<div class="module-body"> 


### Classes

#### [AzureFunctionClient](azure_function_client)
Abstract client that calls Azure Functions.  
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.

#### [CommandableAzureFunctionClient](commandable_azure_function_client)
Abstract client that calls commandable Azure Functions.  
Commandable services are generated automatically for [ICommandable](../../commons/commands/icommandable) objects. Each command is exposed as action determined by "cmd" parameter.

</div>

