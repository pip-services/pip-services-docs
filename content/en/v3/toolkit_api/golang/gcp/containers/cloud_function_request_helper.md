---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get correlationIds, commands and bodies from the Google Function requests.


### Instance methods

#### GetCorrelationId
Returns a correlationId from the Google Function request.

> GetCorrelationId(req *http.Request) string

- **req**: *http.Request - Google Function request.
- **returns**: string - returned correlationId from request.

#### GetCommand
Returns a command from the Google Function request.

> GetCommand(req *http.Request) (string, error)

- **req**: *http.Request - Google Function request.
- **returns**: (string, error) - returned command from request.

#### GetParametrs
Returns a body from the Google Function http request.

> GetParameters(req *http.Request) [*Parameters](../../../commons/run/parameters)

- **req**: *http.Request - Google Function request.
- **returns**: [*Parameters](../../../commons/run/parameters) - returned body from request.
