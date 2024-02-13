---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Constructors

> LambdaAction(cmd: str = None, schema: [Schema](../../../data/validate/schema) = None, action: Callable[[], Any] = None)

### Fields

<span class="hide-title-link">

#### cmd
Command to call the action
> **cmd**: str

#### schema
Schema to validate action parameters
> **schema**: [Schema](../../../data/validate/schema)

#### action
Action to be executed
> **action**: Callable[[], Any]

</span>
