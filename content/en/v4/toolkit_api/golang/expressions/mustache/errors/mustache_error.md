---
type: docs
title: "MustacheError"
linkTitle: "MustacheError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Error that can be thrown by a Mustache template.
---

### Description

The MustacheError class defines an error that can be thrown by a Mustache template.

### Constructors

#### NewMustacheError
Creates a new instance of this class.

> NewMustacheError(traceId, code, message string, line, column int) [*ApplicationError](../../../../commons/errors/application_error)

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **code**: string - code
- **message**: string - human-readable message
- **line**: int - line number
- **column**: int - column number

