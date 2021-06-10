---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Methods

#### Validate
Validates a given value against this rule.

> Validate(path string, schema [ISchema](../ischema), value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - a dot notation path to the value.
- **schema**: [ISchema](../ischema) - a schema this rule is called from
- **value**: interface{} - a value to be validated.
- **results**: [][*ValidationResult](../validation_result) - a list with validation results to add new results.
