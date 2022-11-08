---
type: docs
title: "AzureFunctionAction"
linkTitle: "AzureFunctionAction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The AzureFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### Action
Action to be executed
> `public` Func\<HttpRequest, Task\<IActionResult\>\> Action { get; set; }

#### Cmd
Command to call the action
> `public` string Cmd { get; set; }

#### Schema
Schema to validate action parameters
> `public` [Schema](../../../commons/validate/schema) Schema { get; set; }

</span>
