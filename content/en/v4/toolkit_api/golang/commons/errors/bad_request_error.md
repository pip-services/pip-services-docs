---
type: docs
title: "BadRequestError"
linkTitle: "BadRequestError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors due to improper user requests. 
    
---

### Description

The BadRequestError class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors

#### NewBadRequestError
Creates an error instance and assigns its values.

> NewBadRequestError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


