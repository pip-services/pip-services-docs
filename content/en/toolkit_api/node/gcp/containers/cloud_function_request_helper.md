---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get correlationIds, commands and bodies from the Google Function requests.


### Static methods

#### getCorrelationId
Returns a correlationId from the Google Function request.

> `public static` getCorrelationId(req: any): string

- **req**: any - Google Function request.
- **returns**: string - returned correlationId from request.

#### getCommand
Returns a command from the Google Function request.

> `public static` getCommand(req: any): string

- **req**: any - Google Function request.
- **returns**: string - returned command from request.

#### getParametrs
Returns a body from the Google Function http request.

> `public static` getParametrs(req: any): [Parameters](../../../commons/run/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.
