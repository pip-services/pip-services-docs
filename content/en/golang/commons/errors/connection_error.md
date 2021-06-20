---
type: docs
title: "Connectionerror"
linkTitle: "Connectionerror"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors that occur during connections to remote services.
    
---

### Description

The Connectionerror class is used to manage errors that occur during a connection to a remote service. These errors can be related to misconfiguration, network issues, or the remote service itself.

### Constructors

#### NewConnectionError
Creates an error instance and assigns its values.

> NewConnectionError(correlationId, code, message string) [*ApplicationError](../application_exception)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

