---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Constructors

> LambdaAction(cmd: str = None, schema: [Schema](../../../commons/validate/schema) = None, action: Callable[[], Any] = None)

### Fields

<span class="hide-title-link">

#### cmd
Command to call the action
> **cmd**: str

#### schema
Schema to validate action parameters
> **schema**: [Schema](../../../commons/validate/schema)

#### action
Action to be executed
> **action**: (params: any) => Promise\<any\>

</span>
