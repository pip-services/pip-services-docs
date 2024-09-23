---
type: docs
title: "SymbolNode"
linkTitle: "SymbolNode"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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

> `public` SymbolNode([SymbolNode]() parent, int character)

- **parent**: [SymbolNode]() - node's parent
- **character**: int - node's associated character.


### Properties

#### tokenType
Token type
> `private` [TokenType](../../token_type) _tokenType = [TokenType.Unknown](../../token_type)

#### valid
Boolean variable 

> `private` boolean _valid

### Instance methods


#### addDescendantLine
Adds a line of descendants that represents the characters in the given string.

> `public` void addDescendantLine(String value, [TokenType](../../token_type) tokenType) throws Exception

- **value**: String - given string
- **tokenType**: [TokenType](../../token_type) - token type

#### ancestry
Shows the symbol this node represents.

> `public` String ancestry()

- **returns**: String - symbol this node represents.

#### deepestRead
Establishes characters in the given range as valid characters for the part of a word after the first character. Note that the tokenizer must determine which characters are valid as the beginning character of a word.

> `public` SymbolNode deepestRead([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: [SymbolNode]() - symbol's node


#### ensureChildWithChar
Finds or creates a child for the given character.

> `public` [SymbolNode]() ensureChildWithChar(int value) throws Exception

- **value**: int - chararacters's 
- **returns**: [SymbolNode]() - symbol's node


#### findChildWithChar
Finds a child with the given character.

> `public` [SymbolNode]() findChildWithChar(int value)

- **value**: int - value
- **returns**: [SymbolNode]() - symbol's node

#### getValid
Gets the value of valid.

> `public` boolean getValid()

- **returns**: boolean - valid

#### setValid
Sets the value of valid.

> `public` void setValid(boolean value)

- **value**: boolean - value
  
#### getTokenType
Gets the token type.

> `public` [TokenType](../../token_type) getTokenType()

- **returns**: [TokenType](../../token_type) - token type
  
#### setTokenType
Sets the token type.

> `public` void setTokenType([TokenType](../../token_type) value)

- **value**: [TokenType](../../token_type) - token type

#### unreadToValid
Unwinds to a valid node; this node is "valid" if its ancestry represents a complete symbol.
If this node is not valid, puts back the character and asks the parent to unwind.

> `public` [SymbolNode]() unreadToValid([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: [SymbolNode]() - symbol's node
