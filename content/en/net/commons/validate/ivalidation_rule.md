---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.
