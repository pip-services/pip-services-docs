---
type: docs
title: "SymbolRootNode"
linkTitle: "SymbolRootNode"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This class is a special case of *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Extends**: [SymbolNode](../symbol_node)

### Description
The SymbolRootNode class is a special case of *SymbolNode*. A *SymbolRootNode* object has no symbol of its own, but has children that represent all possible symbols.

### Constructors
Creates and initializes a root node.

> `public` constructor()


### Instance methods


#### add
Adds the given string as a symbol.

> `public` add(value: string, tokenType: [TokenType](../../token_type)): void

- **value**: string - character sequence to add.
- **tokenType**: [TokenType](../../token_type) - token type

#### ancestry
Shows the symbol this node represents.

> `public` ancestry(): string

- **returns**: string - symbol this node represents.

#### nextToken
Returns a symbol string from a scanner.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - scanner to read from
- **returns**: [SymbolNode]() - symbol string from a scanner
