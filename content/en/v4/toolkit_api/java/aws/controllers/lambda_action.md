---
type: docs
title: "LambdaAction"
linkTitle: "LambdaAction"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    Defines actions to be executed as Lambda functions.
---

### Description

The LambdaAction class is used to define actions to be executed as Lambda functions.

### Fields

<span class="hide-title-link">

#### cmd
Command to call the action
> `public` String **cmd**

#### schema
Schema to validate action parameters
> `public` [Schema](../../../data/validate/schema) **schema** 

#### action
Action to be executed
> `public` Function<Map<String, Object>, ?> **action**

</span>
