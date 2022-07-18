---
type: docs
title: "NotFoundException"
linkTitle: "NotFoundException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors caused by attempts to access missing objects.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The NotFoundException class is used to manage errors caused by attempts to access missing objects.

### Constructors
Creates an error instance and assigns its values. 

> `public` NotFoundException(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN". 
- **message**: string - (optional) human-readable description of the error.

