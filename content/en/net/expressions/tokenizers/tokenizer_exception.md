---
type: docs
title: "TokenizerException"
linkTitle: "TokenizerException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception that can be thrown by Tokenizer.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The TokenizerException defines an exception that can be thrown by Tokenizer.

### Constructors


> `public` TokenizerException(string correlationId = null, string code = null, string message = null, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
