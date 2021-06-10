---
type: docs
title: "InvocationError"
linkTitle: "InvocationError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors returned by remote services or by the network during call attempts.
---

### Description

The InvocationError class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors

#### NewInvocationError
Creates an error instance and assigns its values.

> NewInvocationError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

