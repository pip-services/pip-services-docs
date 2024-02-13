---
type: docs
title: "InvocationException"
linkTitle: "InvocationException"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-commons-node"
description: >
    Errors returned by remote services or by the network during call attempts.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InvocationException class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(trace_id: string = null, code: string = null, message: string = null)

- **trace_id**: string - (optional) unique transaction id to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN".
- **message**: string - (optional) human-readable description of the error.

