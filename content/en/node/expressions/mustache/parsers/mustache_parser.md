---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an mustache parser class.
---

### Description

TODO: add description


### Properties

#### initialTokens
The list of original mustache tokens.

> `public` initialTokens(): [MustacheToken[]](../mustache_token)

- **returns**: [MustacheToken[]](../mustache_token) - original mustache tokens.

#### originalTokens
TODO: add description

> `public` originalTokens(): [Token[]](../../../tokenizers/token)

- **returns**: [Token[]](../../../tokenizers/token) - TODO: add description

> `public` originalTokens(value: [Token[]](../../../tokenizers/token))

- **value**: [Token[]](../../../tokenizers/token) - TODO: add description

#### resultTokens
The list of parsed mustache tokens.

> `public` resultTokens(): [MustacheToken[]](../mustache_token)

- **returns**: [MustacheToken[]](../mustache_token) - parsed mustache tokens.

#### template
The mustache template.

> `public` template(): string

- **returns**: string - mustache template.


> `public` template(value: string)

- **value**: string - mustache template.


#### variableNames
The list of found variable names.

> `public` variableNames(): string[]

- **returns**: string[] - found variable names.

### Instance methods

#### clear
Clears parsing results.

> `public` clear(): void

#### parseString
Sets a new mustache string and parses it into internal byte code.

> `public` parseString(mustache: string): void

- **mustache**: string - A new mustache string.

#### parseTokens

> `public` parseTokens(tokens: [Token[]](../../../tokenizers/token)): void