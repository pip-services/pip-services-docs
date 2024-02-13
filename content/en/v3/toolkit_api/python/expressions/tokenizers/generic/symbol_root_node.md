---
type: docs
title: "SymbolRootNode"
linkTitle: "SymbolRootNode"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    This class is a special case of *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Implements**: [SymbolNode](../symbol_node)

### Description
The SymbolRootNode class is a special case of *SymbolNode*. A *SymbolRootNode* object has no symbol of its own, but has children that represent all possible symbols.

### Constructors
Creates and initializes a root node.

> SymbolRootNode()


### Instance methods


#### add
Adds the given string as a symbol.

> add(value: str, token_type: [TokenType](../../token_type))

- **value**: str - character sequence to add.
- **token_type**: [TokenType](../../token_type) - token type

#### next_token
Returns a symbol string from a scanner.

> next_token(scanner: [IScanner](../../../io/iscanner)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - scanner to read from
- **returns**: [Token](../../token) - symbol string from a scanner
