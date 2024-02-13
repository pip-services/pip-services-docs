---
type: docs
title: "SymbolRootNode"
linkTitle: "SymbolRootNode"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    This class is a special case of *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Implements**: [SymbolNode](../symbol_node)

### Description
The SymbolRootNode class is a special case of *SymbolNode*. A *SymbolRootNode* object has no symbol of its own, but has children that represent all possible symbols.

### Constructors

#### NewSymbolRootNode
Creates and initializes a root node.

> NewSymbolRootNode() [*SymbolRootNode]()


### Methods

#### Add
Adds the given string as a symbol.

> (c [*SymbolRootNode]()) Add(value string, tokenType int)

- **value**: string - character sequence to add.
- **tokenType**: int - token type ([TokenType](../../token_type))

#### nextToken
Returns a symbol string from a scanner.

> (c [*SymbolRootNode]()) NextToken(scanner io.IScanner) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - scanner to read from
- **returns**: [*Token](../../token) - symbol string from a scanner

