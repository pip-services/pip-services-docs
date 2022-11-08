---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Fields

<span class="hide-title-link">

#### Cmd
Command to call the action
> `public` string  Cmd { get; set; }

#### Schema
Schema to validate action parameters
> `public` [Schema](../../../commons/validate/schema) Schema { get; set; }

#### Action
Action to be executed
> `public` Func\<string, Task\<string\>\> Action { get; set; }

</span>
