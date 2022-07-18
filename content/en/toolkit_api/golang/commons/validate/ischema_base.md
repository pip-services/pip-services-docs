---
type: docs
title: "ISchemaBase"
linkTitle: "ISchemaBase"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface with a method to perform a validation.
---

### Description

The ISchemaBase interface is used by classes that need to perform a validation against a schema.


### Methods


#### PerformValidation
Validates a given value against the schema and configured validation rules..

> PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: interface{} - dot notation path to the value
- **returns**: [][*ValidationResult](../validation_result) - list with validation results
