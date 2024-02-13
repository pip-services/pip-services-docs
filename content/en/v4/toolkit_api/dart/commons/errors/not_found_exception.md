---
type: docs
title: "NotFoundException"
linkTitle: "NotFoundException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-commons-dart"
description: >
    Errors caused by attempts to access missing objects.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The NotFoundException class is used to manage errors caused by attempts to access missing objects.

### Constructors
Creates an error instance and assigns its values. 

> NotFoundException([String? trace_id, String? code, String? message])

- **trace_id**: String? - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String? - (optional) unique error code. Default: "UNKNOWN". 
- **message**: String? - (optional) human-readable description of the error.

