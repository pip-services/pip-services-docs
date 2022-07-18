---
type: docs
title: "SymbolNode"
linkTitle: "SymbolNode"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Constructs a SymbolNode.
---

### Description
The SymbolNode class allows you to construct a SymbolNode.

**Important points**

- A *SymbolNode* object is a member of a tree that contains all possible prefixes of allowable symbols. Multi-character symbols appear in a *SymbolNode* tree with one node for each character.
- For example, the symbol *=:~* will appear in a tree as three nodes. The first node contains an equals sign, and has a child; that child contains a colon and has a child; this third child contains a tilde, and has no children of its own. If the colon node had another child for a dollar sign character, then the tree would contain the symbol *=:$*.
- A tree of *SymbolNode* objects collaborate to read a (potentially multi-character) symbol from an input stream. A root node with no character of its own finds an initial node
that represents the first character in the input. This node looks to see if the next character in the stream matches one of its children. If so, the node delegates its reading task to its child.
- This approach walks down the tree, pulling symbols from the input that match the path down the tree.
- When a node does not have a child that matches the next character, we will have read the longest possible symbol prefix. This prefix may or may not be a valid symbol.
- Consider a tree that has had *=:~* added and has not had *=:* added. In this tree, of the three nodes that contain *=:~*, only the first and third contain
complete symbols. If, say, the input contains *=:a*, the colon node will not have a child that matches the 'a' and so it will stop reading. The colon node has to "unread": it must push back its character, and ask its parent to unread. Unreading continues until it reaches an ancestor that represents a valid symbol.

### Constructors
Constructs a SymbolNode with the given parent, representing the given character.

> SymbolNode(parent: Optional[[SymbolNode]()], character: int)

- **parent**: [SymbolNode]() - node's parent
- **character**: int - node's associated character.


### Properties

#### token_type
Token type
> token_type(): [TokenType](../../token_type)

- **returns**: [TokenType](../../token_type) - token type

> token_type(value: [TokenType](../../token_type))

- **value**: [TokenType](../../token_type) - token type

#### valid
Boolean variable 

> valid(): bool

- **returns**: bool - true or false

> valid(value: bool)

- **value**: bool - true or false


### Instance methods


#### add_descendant_line
Adds a line of descendants that represents the characters in the given string.

> add_descendant_line(value: str, token_type: [TokenType](../../token_type))

- **value**: str - given string
- **token_type**: [TokenType](../../token_type) - token type

#### ancestry
Shows the symbol this node represents.

> ancestry(): str

- **returns**: str - symbol this node represents.

#### deepest_read
Establishes characters in the given range as valid characters for the part of a word after the first character. Note that the tokenizer must determine which characters are valid as the beginning character of a word.

> deepest_read(scanner: [IScanner](../../../io/iscanner)): [SymbolNode]()

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: [SymbolNode]() - symbol's node


#### ensure_child_with_char
Finds or creates a child for the given character.

> ensure_child_with_char(value: int): [SymbolNode]()

- **value**: int - chararacters's 
- **returns**: [SymbolNode]() - symbol's node


#### find_child_with_char
Finds a child with the given character.

> find_child_with_char(value: int): [SymbolNode]()

- **value**: int - value
- **returns**: [SymbolNode]() - symbol's node


#### unread_to_valid
Unwinds to a valid node; this node is "valid" if its ancestry represents a complete symbol.
If this node is not valid, puts back the character and asks the parent to unwind.

> unread_to_valid(scanner: [IScanner](../../../io/iscanner)): [SymbolNode]()

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: [SymbolNode]() - symbol's node
