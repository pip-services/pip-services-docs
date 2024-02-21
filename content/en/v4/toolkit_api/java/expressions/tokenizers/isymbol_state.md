---
type: docs
title: "ISymbolState"
linkTitle: "ISymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines an interface for tokenizer state that processes delimiters.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The ISymbolState interface is used for tokenizer states that process delimiters.

### Instance methods

#### add
Add a multi-character symbol.

> void add(String value, [TokenType](../token_type) tokenType) throws Exception

- **value**: string - symbol to add, such as *"=:="*.
- **tokenType**: [TokenType](../token_type) - token type.
