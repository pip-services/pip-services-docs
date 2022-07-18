---
type: docs
title: "UnsupportedException"
linkTitle: "UnsupportedException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors caused by calls to unsupported or not yet implemented functionality.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The UnsupportedException class is used to manage errors caused by calls to unsupported or not yet implemented functionality.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN".
- **message**: string - (optional) human-readable description of the error.
