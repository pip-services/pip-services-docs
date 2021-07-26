---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
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
