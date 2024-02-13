---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-commons-python"
description: >
    Errors due to improper user requests. 
    
---

**Implements:** [ApplicationException](../application_exception)

### Description

The BadRequestException class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors
Creates an error instance and assigns its values.

> BadRequestException(context: Optional[IContext] = None, code: str = None, message: str = None)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

