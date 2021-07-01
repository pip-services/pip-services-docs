---
type: docs
title: "SymbolNode"
linkTitle: "SymbolNode"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This class is a special case of a *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Extends**: [SymbolNode](../symbol_node)

### Description
TODO: add description

### Constructors
Creates and initializes a root node.

> `public` constructor()


### Instance methods


#### add
Add the given string as a symbol.

> `public` add(value: string, tokenType: [TokenType](../../token_type)): void

- **value**: string - The character sequence to add.
- **tokenType**: [TokenType](../../token_type) - TODO: add description

#### ancestry
Show the symbol this node represents.

> `public` ancestry(): string

- **returns**: string - The symbol this node represents.

#### nextToken
Return a symbol string from a scanner.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A scanner to read from
- **returns**: [SymbolNode]() - A symbol string from a scanner