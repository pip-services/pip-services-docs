---
type: docs
title: "Configerror"
linkTitle: "Configerror"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors related to mistakes in microservice's user-defined configurations.
---

### Description

The Configerror is used to manage errors related to mistakes in a microservice's user-defined configurations. 

### Constructors

#### NewConfigError
Creates an error instance and assigns its values.

> NewConfigError(correlationId, code, message string) [*ApplicationError](../application_exception)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

