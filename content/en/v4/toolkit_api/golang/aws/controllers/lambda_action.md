---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Fields

<span class="hide-title-link">

#### Cmd
Command to call the action
> **Cmd**: string

#### Schema
Schema to validate action parameters
> **Schema**: [*Schema](../../../data/validate/schema)

#### Action
Action to be executed
> **Action**: func(ctx context.Context, params map[string]any) (any, error)

</span>

