---
type: docs
title: "AzureFunctionAction"
linkTitle: "AzureFunctionAction"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-azure-python"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The AzureFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### action
Action to be executed
> **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]

#### cmd
Command to call the action
> **cmd**: str

#### schema
Schema to validate action parameters
> **schema**: [Schema](../../../data/validate/schema)

</span>
