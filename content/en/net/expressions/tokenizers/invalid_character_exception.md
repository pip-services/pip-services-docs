---
type: docs
title: "InvalidCharacterException"
linkTitle: "InvalidCharacterException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    TODO: add description
---

**Inherits**: [TokenizerException](../tokenizer_exception)

### Description

TODO: add description

### Constructors
Exception thrown when incorrect character is detected input stream. 

> `public` InvalidCharacterException(string correlationId = null, string code = null, string message = null, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable message.
- **line**: number - line number.
- **column**: number - column number.
- **innerException**: Exception - inner exception.
