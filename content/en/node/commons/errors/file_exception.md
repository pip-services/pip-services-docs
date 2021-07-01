---
type: docs
title: "FileException"
linkTitle: "FileException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors in read/write local disk operations.
---

**Extends:** [ApplicationException](../application_exception)

The FileException class is used to manage errors in read/write local disk operations.


### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.

