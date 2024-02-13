---
type: docs
title: "InternalException"
linkTitle: "InternalException"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-commons-node"
description: >
    Errors caused by programming mistakes.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InternalException class is used to manage errors caused by programming mistakes.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(trace_id: string = null, code: string = null, message: string = null)

- **trace_id**: string - (optional) unique transaction id used to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.

