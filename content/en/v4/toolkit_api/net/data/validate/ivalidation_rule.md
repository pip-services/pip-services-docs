---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-data-dotnet"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - path to the value in dot notation.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


