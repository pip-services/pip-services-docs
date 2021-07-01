---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an mustache template class.
---

### Description

TODO: add description

### Constructors
Constructs this class and assigns mustache template.

> `public` constructor(template?: string)

- **template**: string - The mustache template.


### Properties

#### autoVariables
Gets the flag to turn on auto creation of variables for specified mustache.

> `public` autoVariables(): boolean

- **returns**: boolean - the flag to turn on auto creation of variables.

Sets the flag to turn on auto creation of variables for specified mustache.

> `public` autoVariables(value: boolean)

- **value**: boolean - the flag to turn on auto creation of variables.

#### defaultVariables
The list with default variables.

> `public` defaultVariables(): any

- **returns**: any - default variables.

#### initialTokens
The list of original mustache tokens.

> `public` initialTokens(): [MustacheToken[]](../parsers/mustache_token)

- **returns**: [MustacheToken[]](../parsers/mustache_token) - mustache tokens

#### originalTokens
TODO: add description
> `public` originalTokens(): [Token[]](../../tokenizers/token)

- **returns**: [Token[]](../../tokenizers/token) - TODO: add description


> `public` originalTokens(value: Token[])

- **value**: [Token[]](../../tokenizers/token) - TODO: add description

#### resultTokens
The list of processed mustache tokens.

> `public` resultTokens(): [MustacheToken[]](../parsers/mustache_token)

- **returns**: [MustacheToken[]](../parsers/mustache_token) - processed mustache tokens.


### Instance methods


#### clear
Cleans up this calculator from all data.

> `public` clear(): void

#### createVariables
Populates the specified variables list with variables from parsed mustache.

> `public` createVariables(variables: any): void

- **variables**: any - The list of variables to be populated.

#### evaluate
Evaluates this mustache template using default variables.

> `public` evaluate(): string

- **returns**: string - the evaluated template.

#### evaluateWithVariables
Evaluates this mustache using specified variables.

> `public` evaluateWithVariables(variables: any): string

- **variables**: any - The collection of variables.
- **returns**: string - the evaluated template

#### getVariable
Gets a variable value from the collection of variables.

> `public` getVariable(variables: any, name: string): any

- **variables**: any - a collection of variables.
- **name**: string - a variable name to get.
- **returns**: any - a variable value or *undefined*.