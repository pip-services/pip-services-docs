---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> MustacheException(String? correlationId, String code, String message, int line, int column)

- **correlationId**: String? - transaction id used to trace execution through the call chain.
- **code**: String - code
- **message**: String - human-readable message
- **line**: int - line number
- **column**: int - column number
