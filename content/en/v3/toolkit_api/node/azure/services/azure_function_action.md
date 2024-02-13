---
type: docs
title: "AzureFunctionAction"
linkTitle: "AzureFunctionAction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The AzureFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### action
Action to be executed
> `public` **action**: (context: any) => Promise\<any\>

#### cmd
Command to call the action
> `public` **cmd**: string

#### schema
Schema to validate action parameters
> `public` **schema**: [Schema](../../../commons/validate/schema)

</span>
