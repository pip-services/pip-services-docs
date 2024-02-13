---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Fields

<span class="hide-title-link">

#### cmd
Command to call the action
> String? cmd

#### schema
Schema to validate action parameters
> LambdaAction(String? cmd, Schema? schema, Future Function(Map<String, dynamic>) action)

#### action
Action to be executed
> Future Function(Map<String, dynamic>)? action

</span>
