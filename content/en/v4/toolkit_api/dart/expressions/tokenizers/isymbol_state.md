---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Instance methods

#### add
Add a multi-character symbol.

> void add(String value, [TokenType](../token_type) tokenType)

- **value**: String - symbol to add, such as *"=:="*.
- **tokenType**: [TokenType](../token_type) - token type.
