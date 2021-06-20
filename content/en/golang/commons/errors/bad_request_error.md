---
type: docs
title: "BadRequestError"
linkTitle: "BadRequestError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors due to improper user requests. 
    
---

### Description

The BadRequestError class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors

#### NewBadRequestError
Creates an error instance and assigns its values.

> NewBadRequestError(correlationId, code, message string) [*ApplicationError](../application_exception)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

