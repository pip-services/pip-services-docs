---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken defines a Mustache token holder.


### Constructors

#### NewMustacheToken
Creates an instance of a Mustache token.

> NewMustacheToken(typ int, value string, line int, column int) [*MustacheToken]()

- **type**: int - token type.
- **value**: string - token value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### Column
Column number where the token is.

> (c [*MustacheToken]()) Column() int

- **returns**: int - column number.

#### Line
Line number where the token is.

> (c [*MustacheToken]()) Line() int

- **returns**: int - line number.


#### Tokens
Gets a list of subtokens.

> (c [*MustacheToken]()) Tokens() [[]*MustacheToken]()

- **returns**: [[]*MustacheToken]() - list of subtokens.

#### Type
Gets the token type.

> (c [*MustacheToken]()) Type() int

- **returns**: int - token type.


#### Value
Gets the token value or variable name.

> (c [*MustacheToken]()) Value() string

- **returns**: string - token value or variable name.

