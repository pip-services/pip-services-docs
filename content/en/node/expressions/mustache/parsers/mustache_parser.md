---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Properties

#### initialTokens
List of original Mustache tokens.

> `public` initialTokens(): [MustacheToken[]](../mustache_token)

- **returns**: [MustacheToken[]](../mustache_token) - original mustache tokens.

#### originalTokens
List of original Mustache tokens.

> `public` originalTokens(): [Token[]](../../../tokenizers/token)

- **returns**: [Token[]](../../../tokenizers/token) - original Mustache tokens.

> `public` originalTokens(value: [Token[]](../../../tokenizers/token))

- **value**: [Token[]](../../../tokenizers/token) - original Mustache tokens.

#### resultTokens
List of parsed Mustache tokens.

> `public` resultTokens(): [MustacheToken[]](../mustache_token)

- **returns**: [MustacheToken[]](../mustache_token) - parsed Mustache tokens.

#### template
Mustache template.

> `public` template(): string

- **returns**: string - Mustache template.


> `public` template(value: string)

- **value**: string - Mustache template.


#### variableNames
List of found variable names.

> `public` variableNames(): string[]

- **returns**: string[] - found variable names.

### Instance methods

#### clear
Clears parsing results.

> `public` clear(): void

#### parseString
Sets a new Mustache string and parses it into internal byte code.

> `public` parseString(mustache: string): void

- **mustache**: string - new Mustache string.

#### parseTokens

> `public` parseTokens(tokens: [Token[]](../../../tokenizers/token)): void
