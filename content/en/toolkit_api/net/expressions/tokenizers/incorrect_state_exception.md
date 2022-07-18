---
type: docs
title: "IncorrectStateException"
linkTitle: "IncorrectStateException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception thrown when TokenizerState was called in an incorrect state or for an unsupported character.
---

**Inherits**: [TokenizerException](../tokenizer_exception)

### Description

The IncorrectStateException class defines an exception thrown when TokenizerState was called in an incorrect state or for an unsupported character.

### Constructors
Defines a new instance of this class.
> `public` IncorrectStateException(string correlationId = null, string code = null, string message = null, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
