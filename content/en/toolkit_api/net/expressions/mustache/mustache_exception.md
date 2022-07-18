---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> `public` MustacheException(string correlationId = null, string code = null, string message = null, int line = 0, int column = 0, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
