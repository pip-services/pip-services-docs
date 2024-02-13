---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract clients that calls Google Functions
---
---

<div class="module-body"> 


### Classes

#### [CloudFunctionClient](cloud_function_client)
Abstract client that calls Google Functions.  
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.

#### [CommandableCloudFunctionClient](commandable_cloud_function_client)
Abstract client that calls commandable Google Functions.  
Commandable services are generated automatically for [ICommandable](../../commons/commands/icommandable) objects. Each command is exposed as action determined by "cmd" parameter.

</div>
