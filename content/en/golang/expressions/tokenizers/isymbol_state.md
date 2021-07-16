---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Methods

#### Add
Add a multi-character symbol.

> Add(value string, tokenType int)

- **value**: string - symbol to add, such as *"=:="*.
- **tokenType**: int - token type ([TokenType](../token_type)).
