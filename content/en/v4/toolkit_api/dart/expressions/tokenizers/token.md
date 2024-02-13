---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> Token([TokenType](../token_type) type, String? value, int line, int column)

- **type**: [TokenType](../token_type) - type of this token.
- **value**: String? - token string value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.

### Properties

#### column
Column number where the token is.

> int get column

- **returns**: int - column number.

#### line
Line number where the token is.

> int get line

- **returns**: int - line number.


#### type
Token type.

> [TokenType](../token_type) get type

- **returns**: [TokenType](../token_type) - token type.


#### value
Token value.

> String? get value

- **returns**: String? - token value.

### Instance methods

#### equals
Compares this token to an object.
> bool equals(dynamic obj)

- **obj**: dynamic - compared object
- **returns**: bool - true if the type and value are the same, false otherwise.
