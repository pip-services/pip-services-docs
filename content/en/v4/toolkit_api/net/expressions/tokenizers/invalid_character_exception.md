---
type: docs
title: "InvalidCharacterException"
linkTitle: "InvalidCharacterException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Exception thrown when an incorrect character is detected.
---

**Inherits**: [TokenizerException](../tokenizer_exception)

### Description

The InvalidCharacterException class defines an exception thrown when an incorrect character is detected.

### Constructors
Creates a new instance of the class. 

> `public` InvalidCharacterException(IContext context = null, string code = null, string message = null, Exception innerException = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
