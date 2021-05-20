---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: object - a value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - a list with validation results to add new results.
