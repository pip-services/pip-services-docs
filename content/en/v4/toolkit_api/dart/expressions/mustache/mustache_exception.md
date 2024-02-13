---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> MustacheException(IContext? context, String code, String message, int line, int column)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: String - code
- **message**: String - human-readable message
- **line**: int - line number
- **column**: int - column number
