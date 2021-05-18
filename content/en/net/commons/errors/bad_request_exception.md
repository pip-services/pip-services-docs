---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors due to improper user requests. 
    
---

**Extends:** [ApplicationException](../application_exception)

### Description

The BadRequestException class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

