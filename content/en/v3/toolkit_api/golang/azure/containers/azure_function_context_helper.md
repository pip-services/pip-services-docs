---
type: docs
title: "AzureFunctionrequestHelper"
linkTitle: "AzureFunctionRequestHelper"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function request.
---

### Description

The AzureFunctionrequestHelper class contains methods used to get correlationIds, commands and bodies from the Azure Function request.


### Static methods

#### DecodeBody
Returns body of request

> DecodeBody(req *http.Request, target any) error

- **req**: *http.Request - request struct.
- **target**: any - the target instance to which the result will be written
- **returns**: error - decode error.

#### GetCorrelationId
Returns a correlationId from the Azure Function request.

> GetCorrelationId(req *http.Request) string

- **req**: *http.Request - Azure Function request.
- **returns**: string - returned correlationId from request.

#### GetCommand
Returns a command from the Azure Function request.

> GetCommand(req *http.Request) (string, error)

- **request**: *http.Request - Azure Function request.
- **returns**: (string, error) - returned command from request.

#### GetParametrs
Returns a body from the Azure Function request http request.

> GetParameters(req *http.Request) [*Parameters](../../../commons/run/parameters)

- **req**: *http.Request - Azure Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.
