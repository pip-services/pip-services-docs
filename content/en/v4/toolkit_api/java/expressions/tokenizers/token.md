---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> `public` [TokenType](../token_type)(TokenType type, String value, int line, int column)

- **type**: [TokenType](../token_type) - type of this token.
- **value**: String - token string value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.

### Instance methods
#### getColumn
Gets the column number where the token is.
int getColumn()
- **returns**: number - column number.

#### getLine
Gets tne number where the token is.
int getLine()
- **returns**: int - line number.

#### getType
Gets the token type.
[TokenType](../token_type) getType()
- **returns**: [TokenType](../token_type) - token type.

#### getValue
Gets the token's value.
String getValue()
- **returns**: string - token value.

  
#### equals
Compares this token to an object.
> `public` boolean equals(Object obj)

- **obj**: Object - compared object
- **returns**: boolean - true if the type and value are the same, false otherwise.
