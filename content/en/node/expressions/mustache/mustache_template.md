---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors
Constructs this class and assigns a mustache template.

> `public` constructor(template?: string)

- **template**: string - mustache template.


### Properties

#### autoVariables
Gets the flag to turn on auto-creation of variables for the Mustache template.

> `public` autoVariables(): boolean

- **returns**: boolean - flag to turn on auto creation of variables.

Sets the flag to turn on auto creation of variables for the Mustache template.

> `public` autoVariables(value: boolean)

- **value**: boolean - flag to turn on auto-creation of variables.

#### defaultVariables
List with default variables.

> `public` defaultVariables(): any

- **returns**: any - default variables.

#### initialTokens
List of original mustache tokens.

> `public` initialTokens(): [MustacheToken[]](../parsers/mustache_token)

- **returns**: [MustacheToken[]](../parsers/mustache_token) - Mustache tokens

#### originalTokens
Lists the original tokens
> `public` originalTokens(): [Token[]](../../tokenizers/token)

- **returns**: [Token[]](../../tokenizers/token) - original tokens


> `public` originalTokens(value: Token[])

- **value**: [Token[]](../../tokenizers/token) - original tokens
#### resultTokens
List of processed Mustache tokens.

> `public` resultTokens(): [MustacheToken[]](../parsers/mustache_token)

- **returns**: [MustacheToken[]](../parsers/mustache_token) - processed Mustache tokens.


### Instance methods


#### clear
Cleans up this calculator.

> `public` clear(): void

#### createVariables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> `public` createVariables(variables: any): void

- **variables**: any - List of variables to be populated.

#### evaluate
Evaluates this Mustache template using default variables.

> `public` evaluate(): string

- **returns**: string - evaluated template.

#### evaluateWithVariables
Evaluates this Mustache using specified variables.

> `public` evaluateWithVariables(variables: any): string

- **variables**: any - collection of variables.
- **returns**: string - evaluated template

#### getVariable
Gets a variable value from the collection of variables.

> `public` getVariable(variables: any, name: string): any

- **variables**: any - collection of variables.
- **name**: string - variable name to get.
- **returns**: any - variable value or *undefined*.
