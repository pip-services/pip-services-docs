---
type: docs
title: "AzureFunctionContextHelper"
linkTitle: "AzureFunctionContextHelper"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function context.
---

### Description

The AzureFunctionContextHelper class contains methods used to get correlationIds, commands and bodies from the Azure Function context.


### Static methods

#### getTraceId
Returns a correlationId from the Azure Function context.

> `static String getTraceId(Map<String, dynamic> context)

- **context**: any - Azure Function context.
- **returns**: string - returned correlationId from context.

#### getCommand
Returns a command from the Azure Function context.

> static String getCommand(Map<String, dynamic> context)

- **context**: any - Azure Function context.
- **returns**: string - returned command from context.

#### getParameters
Returns a body from the Azure Function context http request.

> static Parameters getParameters(Map<String, dynamic> context)

- **context**: any - Azure Function context.
- **returns**: [Parameters](../../../components/exec/parameters) - returned body from context.
