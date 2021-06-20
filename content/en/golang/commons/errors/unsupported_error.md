---
type: docs
title: "UnsupportedError"
linkTitle: "UnsupportedError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors caused by calls to unsupported or not yet implemented functionality.
---

### Description

The UnsupportedError class is used to manage errors caused by calls to unsupported or not yet implemented functionality.

### Constructors

#### NewUnsupportedError
Creates an error instance and assigns its values.

> NewUnsupportedError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
