---
type: docs
title: "AzureFunctionContextHelper"
linkTitle: "AzureFunctionContextHelper"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    TODO: add description
---

### Description

TODO: add description


### Instance methods

#### getCorrelationId
Returns correlationId from Azure Function context.

> `public static` getCorrelationId(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns correlationId from context.

#### getCommand
Returns command from Azure Function context.

> `public static` getCommand(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns command from context.

#### getHttpRequestBody
Returns body from Azure Function context http request.

> `public static` getHttpRequestBody(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns body from context.
