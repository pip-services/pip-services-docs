---
type: docs
title: "TokenizerException"
linkTitle: "TokenizerException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Exception that can be thrown by Tokenizer.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The TokenizerException defines an exception that can be thrown by Tokenizer.

### Constructors


> `public` TokenizerException(IContext context = null, string code = null, string message = null, Exception innerException = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
