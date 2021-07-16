---
type: docs
title: "AzureFunctionContextHelper"
linkTitle: "AzureFunctionContextHelper"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function context.
---

### Description

The AzureFunctionContextHelper class contains methods used to get correlationIds, commands and bodies from the Azure Function context.


### Instance methods

#### getCorrelationId
Returns a correlationId from the Azure Function context.

> `public static` getCorrelationId(context: any): string

- **context**: any - Azure Function context.
- **returns**: string - returned correlationId from context.

#### getCommand
Returns a command from the Azure Function context.

> `public static` getCommand(context: any): string

- **context**: any - Azure Function context.
- **returns**: string - returned command from context.

#### getHttpRequestBody
Returns a body from the Azure Function context http request.

> `public static` getHttpRequestBody(context: any): string

- **context**: any - Azure Function context.
- **returns**: string - returned body from context.
