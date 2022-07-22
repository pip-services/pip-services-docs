---
type: docs
title: "CloudFunctionAction"
linkTitle: "CloudFunctionAction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The CloudFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### action
Action to be executed
> **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

#### cmd
Command to call the action
> **cmd**: str

#### schema
Schema to validate action parameters
> **schema**: [Schema](../../../commons/validate/schema)

</span>
