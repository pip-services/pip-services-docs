---
type: docs
title: "UnauthorizedError"
linkTitle: "UnauthorizedError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

### Description

The UnauthorizedError class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors

#### NewUnauthorizedError
Creates an error instance and assigns its values.

> NewUnauthorizedError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

