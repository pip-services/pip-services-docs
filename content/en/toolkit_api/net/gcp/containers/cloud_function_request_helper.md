---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get correlationIds, commands and bodies from the Google Function requests.


### Static methods

#### ExtractFromQuery
Extracts parameter from query by key

> `public static` string ExtractFromQuery(string parameter, HttpContext context)

- **parameter**: string - parameter name.
- **context**: HttpContext - Google Function request.

#### GetBodyAsync
Returns body from Google Function request.

> `public static` Task<[Parameters](../../../commons/run/parameters)> GetBodyAsync(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: string - body from request as Parameters object.

#### GetCorrelationId
Returns a correlationId from the Google Function request.

> `public static` string GetCorrelationId(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: string - returned correlationId from request.

#### GetCommandAsync
Returns a command from the Google Function request.

> `public static` string GetCommandAsync(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: string - returned command from request.

#### GetParametersAsync
Returns a body from the Google Function http request.

> `public static` [Parameters](../../../commons/run/parameters) GetParametersAsync(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.
