---
type: docs
title: "InvocationException"
linkTitle: "InvocationException"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Errors returned by remote services or by the network during call attempts.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InvocationException class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors
Creates an error instance and assigns its values.

> `public` InvocationException(String traceId, String code, String message)

- **trace_id**: String - (optional) unique transaction id to trace execution through a call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN".
- **message**: String - (optional) human-readable description of the error.

