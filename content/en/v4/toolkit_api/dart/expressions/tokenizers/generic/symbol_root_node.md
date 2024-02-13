---
type: docs
title: "SymbolRootNode"
linkTitle: "SymbolRootNode"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    This class is a special case of *SymbolNode*. A *SymbolRootNode*
    object has no symbol of its own, but has children that represent all possible symbols.
---

**Extends**: [SymbolNode](../symbol_node)

### Description
The SymbolRootNode class is a special case of *SymbolNode*. A *SymbolRootNode* object has no symbol of its own, but has children that represent all possible symbols.

### Constructors
Creates and initializes a root node.

> SymbolRootNode()


### Instance methods


#### add
Adds the given string as a symbol.

> void add(String value, [TokenType](../../token_type) tokenType)

- **value**: String - character sequence to add.
- **tokenType**: [TokenType](../../token_type) - token type

#### nextToken
Returns a symbol string from a scanner.

> [Token](../../token) nextToken([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner to read from
- **returns**: [Token](../../token) - symbol string from a scanner
