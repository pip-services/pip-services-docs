---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors
Constructs this class and assigns a mustache template.

> MustacheTemplate([String? mustacheTemplate])

- **template**: String? - mustache template.


### Properties

#### autoVariables
Gets the flag to turn on auto-creation of variables for the Mustache template.

> bool get autoVariables

- **returns**: bool - flag to turn on auto creation of variables.

Sets the flag to turn on auto creation of variables for the Mustache template.

> set autoVariables(bool value)

- **value**: bool - flag to turn on auto-creation of variables.

#### defaultVariables
List with default variables.

> Map\<String, dynamic\> get defaultVariables

- **returns**: Map\<String, dynamic\> - default variables.

#### initialTokens
List of original mustache tokens.

> List<[MustacheToken](../parsers/mustache_token)> get initialTokens

- **returns**: List<[MustacheToken](../parsers/mustache_token)> - Mustache tokens

#### originalTokens
Lists the original tokens
> List<[Token](../../tokenizers/token)> get originalTokens

- **returns**: List<[Token](../../tokenizers/token)> - original tokens


> set originalTokens(List<[Token](../../tokenizers/token)> value)

- **value**: List<[Token](../../tokenizers/token)> - original tokens

#### resultTokens
List of processed Mustache tokens.

> List<[MustacheToken](../parsers/mustache_token)> get resultTokens

- **returns**: List<[MustacheToken](../parsers/mustache_token)> - processed Mustache tokens.


### Instance methods


#### clear
Cleans up this calculator.

> void clear()

#### createVariables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> void createVariables(Map\<String, dynamic\>? variables)

- **variables**: Map\<String, dynamic\>? - List of variables to be populated.

#### evaluate
Evaluates this Mustache template using default variables.

> String? evaluate()

- **returns**: String? - evaluated template.

#### evaluateWithVariables
Evaluates this Mustache using specified variables.

> String? evaluateWithVariables(Map\<String, dynamic\>? variables)

- **variables**: Map\<String, dynamic\>? - collection of variables.
- **returns**: String? - evaluated template

#### getVariable
Gets a variable value from the collection of variables.

> dynamic getVariable(Map\<String, dynamic\>? variables, String? name)

- **variables**: Map\<String, dynamic\>? - collection of variables.
- **name**:  String? - variable name to get.
- **returns**: dynamic - variable value or *undefined*.
