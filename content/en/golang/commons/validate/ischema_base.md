---
type: docs
title: "ISchemaBase"
linkTitle: "ISchemaBase"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    TODO: add description
---

### Description

The ISchemaBase interface is used by classes that need to perform a validation.


### Methods


#### PerformValidation
Performs a validation.

> PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: interface{} - dot notation path to the value
- **returns**: [][*ValidationResult](../validation_result) - list with validation results
