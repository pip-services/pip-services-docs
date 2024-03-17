---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Errors due to improper user requests. 
    
---

**Extends:** [ApplicationException](../application_exception)

### Description

The BadRequestException class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors
Creates an error instance and assigns its values.

> `public` BadRequestException(String traceId, String code, String message)

- **trace_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.

