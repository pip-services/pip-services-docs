---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> `public` ExpressionException(IContext context = null, string code = null, string message = null, Exception innerException = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - code.
- **message**: string - human-readable error message.
- **innerException**: Exception - inner exception.
