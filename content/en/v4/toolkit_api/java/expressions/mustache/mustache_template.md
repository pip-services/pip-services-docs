---
type: docs
title: "MustacheTemplate"
linkTitle: "MustacheTemplate"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a Mustache template class.
---

### Description

The MustacheTemplate class allows you to implement a Mustache template class.

### Constructors
Constructs this class and assigns a mustache template.

> `public` MustacheTemplate(String template) throws Exception

- **template**: String - mustache template.


### Properties

#### autoVariables
Flag to turn on auto-creation of variables for the Mustache template.

> `private` boolean _autoVariables = true


#### defaultVariables
List with default variables.

> `private final` Map<String, Object> _defaultVariables = new HashMap<>()


### Instance methods



#### clear
Cleans up this calculator.

> `public` void clear()

#### createVariables
Populates the specified variables list with variables obtained from a parsed Mustache template.

> `public` void createVariables(Map<String, Object> variables)

- **variables**: Map<String, Object> - List of variables to be populated.

#### evaluate
Evaluates this Mustache template using default variables.

> `public` String evaluate() throws MustacheException

- **returns**: string - evaluated template.

#### evaluateWithVariables
Evaluates this Mustache using specified variables.

> `public` String evaluateWithVariables(Map<String, Object> variables) throws MustacheException

- **variables**: Map<String, Object> - collection of variables.
- **returns**: String - evaluated template

#### getVariable
Gets a variable value from the collection of variables.

> `public` Object getVariable(Map<String, Object> variables, String name)

- **variables**: Map<String, Object> - collection of variables.
- **name**: String - variable name to get.
- **returns**: Object - variable value or *undefined*.
