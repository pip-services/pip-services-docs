---
type: docs
title: "MustacheError"
linkTitle: "MustacheError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
description: > 
    Error that can be thrown by a Mustache template.
---

### Description

The MustacheError class defines an error that can be thrown by a Mustache template.

### Constructors

#### NewMustacheError
Creates a new instance of this class.

> NewMustacheError(correlationId, code, message string, line, column int) [*ApplicationError](../../../../commons/errors/application_error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable message
- **line**: int - line number
- **column**: int - column number
