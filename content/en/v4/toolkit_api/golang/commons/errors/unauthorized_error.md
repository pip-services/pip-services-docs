---
type: docs
title: "UnauthorizedError"
linkTitle: "UnauthorizedError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

### Description

The UnauthorizedError class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors

#### NewUnauthorizedError
Creates an error instance and assigns its values.

> NewUnauthorizedError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


