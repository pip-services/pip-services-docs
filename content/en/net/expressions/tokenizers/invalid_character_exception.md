---
type: docs
title: "InvalidCharacterException"
linkTitle: "InvalidCharacterException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception thrown when an incorrect character is detected.
---

**Inherits**: [TokenizerException](../tokenizer_exception)

### Description

The InvalidCharacterException class defines an exception thrown when an incorrect character is detected.

### Constructors
Creates a new instance of the class. 

> `public` InvalidCharacterException(string correlationId = null, string code = null, string message = null, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
