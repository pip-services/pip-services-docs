---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> `public` MustacheException(IContext context = null, string code = null, string message = null, int line = 0, int column = 0, Exception innerException = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
