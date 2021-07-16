---
type: docs
title: "MustacheError"
linkTitle: "MustacheError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Exception that can be thrown by a Mustache template.
---

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors

#### NewMustacheError
Creates a new instance of the MustacheException class.

> NewMustacheError(correlationId, code, message string, line, column int) [*ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable message
- **line**: int - line number
- **column**: int - column number
