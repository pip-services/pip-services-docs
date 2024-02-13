---
type: docs
title: "SymbolRootNode"
linkTitle: "SymbolRootNode"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    This class is a special case of *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Inherits**: [SymbolNode](../symbol_node)

### Description
The SymbolRootNode class is a special case of *SymbolNode*. A *SymbolRootNode* object has no symbol of its own, but has children that represent all possible symbols.

### Constructors
Creates and initializes a root node.

> `public` SymbolRootNode()


### Instance methods


#### Add
Adds the given string as a symbol.

> `public` void Add(string value, [TokenType](../../token_type) tokenType)

- **value**: string - character sequence to add.
- **tokenType**: [TokenType](../../token_type) - token type

#### NextToken
Returns a symbol string from a scanner.

> `public` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - scanner to read from
- **returns**: [Token](../../token) - symbol string from a scanner
