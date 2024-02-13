---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Instance methods

#### add
Add a multi-character symbol.

> add(value: string, tokenType: [TokenType](../token_type)): void

- **value**: string - symbol to add, such as *"=:="*.
- **tokenType**: [TokenType](../token_type) - token type.
