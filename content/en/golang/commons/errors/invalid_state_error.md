---
type: docs
title: "InvalidStateError"
linkTitle: "InvalidStateError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors related to calling operations, which require the component to be in a specific state.
    For instance: business calls when the component is not ready.
---

### Description

The InvalidStateError class is used to manage errors related to calling opertaions that require the component to be in a specific state. For example, business calls when the component is not ready.

### Constructors

#### NewInvalidStateError
Creates an error instance and assigns its values.

> NewInvalidStateError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

