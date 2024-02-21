---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken defines a Mustache token holder.


### Constructors
Creates an instance of a Mustache token.

> `public` MustacheToken([MustacheTokenType](../mustache_token_type) type, String value, int line, int column)

- **type**: [MustacheTokenType](../mustache_token_type) - token type.
- **value**: String - token value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### column
Column number where the token is.

> `private final` int _column

#### line
Line number where the token is.

> `private final` int _line

#### tokens
Gets a list of subtokens.

> `private final` List<[MustacheToken]()> _tokens = new ArrayList<>()

#### type
Gets the token type.

> `private final` [MustacheTokenType](../mustache_token_type) _type
 
#### value
Gets the token value or variable name.

> `public` String _value

