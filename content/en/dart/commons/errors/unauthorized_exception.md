---
type: docs
title: "UnauthorizedException"
linkTitle: "UnauthorizedException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

**Extends:** [ApplicationException](../application_exception)

### Description

The UnauthorizedException class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors
Creates an error instance and assigns its values.  

> UnauthorizedException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.

