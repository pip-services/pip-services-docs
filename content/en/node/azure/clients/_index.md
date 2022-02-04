---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    TODO: add description
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
Commandable services are generated automatically for [[https://pip-services3-nodex.github.io/pip-services3-commons-nodex/interfaces/commands.icommandable.html ICommandable objects]] [ICommandable](../../commons/commands/icommandable.md) objects. Each command is exposed as action determined by "cmd" parameter.

</div>
