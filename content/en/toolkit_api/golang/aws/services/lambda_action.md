---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-aws-gox"
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
> **Schema**: [*Schema](../../../commons/validate/schema)

#### Action
Action to be executed
> **Action**: func(ctx context.Context, params map[string]any) (any, error)

</span>
