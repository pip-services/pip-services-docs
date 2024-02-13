---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines an interface for a tokenizer state that processes delimiters.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Instance methods

#### add
Add a multi-character symbol.

> add(value: str, token_type: [TokenType](../token_type))

- **value**: str - symbol to add, such as *"=:="*.
- **token_type**: [TokenType](../token_type) - token type.

