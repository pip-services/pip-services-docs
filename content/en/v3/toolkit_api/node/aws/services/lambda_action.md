---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Fields

<span class="hide-title-link">

#### cmd
Command to call the action
> `public` **cmd**: string

#### schema
Schema to validate action parameters
> `public` **schema**: [Schema](../../../commons/validate/schema)

#### action
Action to be executed
> `public` **action**: (params: any) => Promise\<any\>

</span>
