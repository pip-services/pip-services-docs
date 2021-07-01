---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

TODO: add description

### Instance methods

#### add
Add a multi-character symbol.

> add(value: string, tokenType: [TokenType](../token_type)): void

- **value**: string - The symbol to add, such as *"=:="*.
- **tokenType**: [TokenType](../token_type) - The token type.