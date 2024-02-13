---
type: docs
title: "CloudFunctionAction"
linkTitle: "CloudFunctionAction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The CloudFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### Action
Action to be executed
> `public` **Action**: Func\<HttpContext, Task\>

#### Cmd
Command to call the action
> `public` **Cmd**: string

#### Schema
Schema to validate action parameters
> `public` **Schema**: [Schema](../../../commons/validate/schema)

</span>
