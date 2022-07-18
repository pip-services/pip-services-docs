---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> `public` ExpressionException(string correlationId = null, string code = null, string message = null, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable error message.
- **innerException**: Exception - inner exception.
