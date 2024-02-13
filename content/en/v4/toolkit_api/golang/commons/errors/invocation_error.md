---
type: docs
title: "InvocationError"
linkTitle: "InvocationError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors returned by remote services or by the network during call attempts.
---

### Description

The InvocationError class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors

#### NewInvocationError
Creates an error instance and assigns its values.

> NewInvocationError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


