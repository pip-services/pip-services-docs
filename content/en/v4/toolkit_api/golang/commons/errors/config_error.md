---
type: docs
title: "Configerror"
linkTitle: "Configerror"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors related to mistakes in microservice's user-defined configurations.
---

### Description

The Configerror is used to manage errors related to mistakes in a microservice's user-defined configurations. 

### Constructors

#### NewConfigError
Creates an error instance and assigns its values.

> NewConfigError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


