---
type: docs
title: "InvalidStateException"
linkTitle: "InvalidStateException"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-commons-node"
description: >
    Errors related to calling operations, which require the component to be in a specific state.
    For instance: business calls when the component is not ready.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InvalidStateException class is used to manage errors related to calling operations that require the component to be in a specific state. For example, business calls when the component is not ready.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(trace_id: string = null, code: string = null, message: string = null)

- **trace_id**: string - (optional) unique transaction id used to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN".
- **message**: string - (optional) human-readable description of the error.

