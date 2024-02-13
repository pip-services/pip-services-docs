---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors

#### NewMustacheTemplate
Creates a new instance of a mustache template.

> NewMustacheTemplate() [*MustacheTemplate]()

#### NewMustacheTemplateFromString

Constructs this class and assigns a mustache template.

> NewMustacheTemplateFromString(template string) ([*MustacheTemplate](), error)

- **template**: string - mustache template.


### Properties

#### AutoVariables
Gets the flag to turn on auto-creation of variables for the Mustache template.

> (c [*MustacheTemplate]()) AutoVariables() bool

- **returns**: bool - flag to turn on auto creation of variables.

#### SetAutoVariables

Sets the flag to turn on auto creation of variables for the Mustache template.

> (c [*MustacheTemplate]()) SetAutoVariables(value bool)

- **value**: bool - flag to turn on auto-creation of variables.

#### DefaultVariables
 Gets the list with default variables.

> (c [*MustacheTemplate]()) DefaultVariables() map[string]string

- **returns**: map[string]string - default variables.

#### SetDefaultVariables
Sets the list with default variables.
> (c [*MustacheTemplate]()) SetDefaultVariables(value map[string]string)

- **value**: map[string]string - default variables.

#### InitialTokens
List of original mustache tokens.

> (c [*MustacheTemplate]()) InitialTokens() [[]*MustacheToken](../parsers/mustache_token)

- **returns**: [[]*MustacheToken](../parsers/mustache_token) - Mustache tokens

#### OriginalTokens
Lists the original tokens
> (c [*MustacheTemplate]()) OriginalTokens() [[]*Token[]](../../tokenizers/token)

- **returns**: [[]*Token[]](../../tokenizers/token) - original tokens

#### SetOriginalTokens
Sets Lists the original tokens
> (c [*MustacheTemplate]()) SetOriginalTokens(value [[]*Token[]](../../tokenizers/token)) error

- **value**: [[]*Token[]](../../tokenizers/token) - original tokens

#### ResultTokens
List of processed Mustache tokens.

> (c [*MustacheTemplate]()) ResultTokens() [[]*MustacheToken](../parsers/mustache_token)

- **returns**: [[]*MustacheToken](../parsers/mustache_token) - processed Mustache tokens.


### Methods


#### Clear
Cleans up this calculator.

> (c [*MustacheTemplate]()) Clear()

#### CreateVariables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> (c [*MustacheTemplate]()) CreateVariables(variables *map[string]string)

- **variables**: *map[string]string - List of variables to be populated.

#### Evaluate
Evaluates this Mustache template using default variables.

> (c [*MustacheTemplate]()) Evaluate() (string, error)

- **returns**: (string, error) - evaluated template.

#### EvaluateWithVariables
Evaluates this Mustache using specified variables.

> (c [*MustacheTemplate]()) EvaluateWithVariables(variables map[string]string) (string, error)

- **variables**: map[string]string - collection of variables.
- **returns**: (string, error) - evaluated template

#### GetVariable
Gets a variable value from the collection of variables.

> (c [*MustacheTemplate]()) GetVariable(variables map[string]string, name string) *string

- **variables**: map[string]string - collection of variables.
- **name**: string - variable name to get.
- **returns**: \*string - variable value or *nil*.

