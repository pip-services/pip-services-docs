---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors
Constructs this class and assigns a mustache template.

> `public` MustacheTemplate(string template = null)

- **template**: string - mustache template.


### Properties

#### AutoVariables
Gets the flag to turn on auto-creation of variables for the Mustache template.

> `public` bool AutoVariables { get; set; }


#### DefaultVariables
List with default variables.

> `public` Dictionary\<string, dynamic\> DefaultVariables { get; }


#### InitialTokens
List of original mustache tokens.

> `public` IList<[MustacheToken](../parsers/mustache_token)> InitialTokens { get; }

#### OriginalTokens
Lists the original tokens
> `public` IList<[Token](../../tokenizers/token)> OriginalTokens

#### ResultTokens
List of processed Mustache tokens.

> `public` IList<[MustacheToken](../parsers/mustache_token)> ResultTokens

- **returns**: [MustacheToken](../parsers/mustache_token) - processed Mustache tokens.


### Instance methods


#### Clear
Cleans up this calculator.

> `public` void Clear()

#### CreateVariables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> `public` void CreateVariables(Dictionary\<string, dynamic\> variables)

- **variables**: Dictionary\<string, dynamic\> - List of variables to be populated.

#### Evaluate
Evaluates this Mustache template using default variables.

> `public` string Evaluate()

- **returns**: string - evaluated template.

#### EvaluateWithVariables
Evaluates this Mustache using specified variables.

> `public` string EvaluateWithVariables(Dictionary\<string, dynamic\> variables)

- **variables**: Dictionary\<string, dynamic\> - collection of variables.
- **returns**: string - evaluated template

#### GetVariable
Gets a variable value from the collection of variables.

> `public` dynamic GetVariable(Dictionary\<string, dynamic\> variables, string name)

- **variables**: Dictionary\<string, dynamic\> - collection of variables.
- **name**: string - variable name to get.
- **returns**: dynamic - variable value or *null*.
