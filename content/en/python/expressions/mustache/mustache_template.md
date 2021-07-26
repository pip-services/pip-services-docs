---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors
Constructs this class and assigns a mustache template.

> MustacheTemplate(template: Optional[str] = None)

- **template**: Optional[str] - mustache template.


### Properties

#### auto_variables
Gets the flag to turn on auto-creation of variables for the Mustache template.

> auto_variables(): bool

- **returns**: bool - flag to turn on auto creation of variables.

Sets the flag to turn on auto creation of variables for the Mustache template.

> auto_variables(value: bool)

- **value**: bool - flag to turn on auto-creation of variables.

#### default_variables
List with default variables.

> default_variables(): Any

- **returns**: Any - default variables.

#### initial_tokens
List of original mustache tokens.

> initial_tokens(): List[[MustacheToken](../parsers/mustache_token)]

- **returns**: List[[MustacheToken](../parsers/mustache_token)] - Mustache tokens

#### originalTokens
Lists the original tokens
> originalTokens(): List[[Token](../../tokenizers/token)]

- **returns**: List[[Token](../../tokenizers/token)] - original tokens


> originalTokens(value: List[[Token](../../tokenizers/token)])

- **value**: List[[Token](../../tokenizers/token)] - original tokens

#### result_tokens
List of processed Mustache tokens.

> result_tokens(): List[[MustacheToken](../parsers/mustache_token)]

- **returns**: List[[MustacheToken](../parsers/mustache_token)] - processed Mustache tokens.


### Instance methods


#### clear
Cleans up this calculator.

> clear()

#### create_variables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> create_variables(variables: Any)

- **variables**: Any - List of variables to be populated.

#### evaluate
Evaluates this Mustache template using default variables.

> evaluate(): str

- **returns**: str - evaluated template.

#### evaluate_with_variables
Evaluates this Mustache using specified variables.

> evaluate_with_variables(variables: Any): str

- **variables**: Any - collection of variables.
- **returns**: str - evaluated template

#### get_variable
Gets a variable value from the collection of variables.

> get_variable(variables: Any, name: str): Any

- **variables**: Any - collection of variables.
- **name**: str - variable name to get.
- **returns**: Any - variable value or *undefined*.
