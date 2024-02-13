---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines an interface for tokenizer states that process delimiters.
---

**Inherits**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Instance methods

#### Add
Add a multi-character symbol.

> void Add(string value, [TokenType](../token_type) tokenType)

- **value**: string - symbol to add, such as *"=:="*.
- **tokenType**: [TokenType](../token_type) - token type.
