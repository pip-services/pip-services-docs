---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-gcp-node"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get correlationIds, commands and bodies from the Google Function requests.


### Static methods

#### getTraceId
Returns a traceId from the Google Function request.

> `public static` getTraceId(req: any): string

- **req**: any - Google Function request.
- **returns**: string - returned traceId from request.

#### getCommand
Returns a command from the Google Function request.

> `public static` getCommand(req: any): string

- **req**: any - Google Function request.
- **returns**: string - returned command from request.

#### getParametrs
Returns a body from the Google Function http request.

> `public static` getParametrs(req: any): [Parameters](../../../components/exec/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../components/exec/parameters) - returned body from request.
