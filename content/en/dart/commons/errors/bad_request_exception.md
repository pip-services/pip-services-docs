---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors due to improper user requests. 
    
---

**Extends:** [ApplicationException](../application_exception)

### Description

The BadRequestException class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors
Creates an error instance and assigns its values.

> BadRequestException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.

