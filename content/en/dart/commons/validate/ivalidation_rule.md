---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Instance methods

#### validate
Validates a given value against this rule.

> void validate(String path, [Schema](../schema) schema, dynamic value, List<[ValidationRule](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationRule](../validation_result)> - list with validation results.
