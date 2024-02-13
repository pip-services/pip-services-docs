---
type: docs
title: "AzureFunctionrequestHelper"
linkTitle: "AzureFunctionrequestHelper"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function request.
---

### Description

The AzureFunctionrequestHelper class contains methods used to get correlationIds, commands and bodies from the Azure Function request.


### Static methods

#### ExtractFromQuery
Extracts parameter from query by name

> `public static` string ExtractFromQuery(string parameter, HttpRequest request)

- **parameter**: string - parameter name.
- **request**: HttpRequest - Azure Function request.
- **returns**: string - returned correlationId from request.

#### ReadBody
Read body from request

> `public static` string ReadBody(HttpRequest request)

- **request**: HttpRequest - Azure Function request.
- **returns**: string - body represents as string.

#### GetBodyAsParameters
Get body as Parameters object from request

> `public static` [Parameters](../../../commons/run/parameters) GetBodyAsParameters(HttpRequest request)

- **request**: HttpRequest - Azure Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.

#### GetCorrelationId
Returns a correlationId from the Azure Function request.

> `public static` string GetCorrelationId(HttpRequest request)

- **request**: HttpRequest - Azure Function request.
- **returns**: string - returned correlationId from request.

#### GetCommand
Returns a command from the Azure Function request.

> `public static` GetCommand(HttpRequest request): string

- **request**: HttpRequest - Azure Function request.
- **returns**: string - returned command from request.

#### GetParameters
Returns a body from the Azure Function request http request.

> `public static` [Parameters](../../../commons/run/parameters) GetBodyAsParameters(HttpRequest request)

- **request**: HttpRequest - Azure Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.

#### GetPropertyByName
Extract property from request by name

> `public static` string GetPropertyByName(HttpRequest request, string name)

- **request**: HttpRequest - Azure Function request object.
- **name**: string - parameter name.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.