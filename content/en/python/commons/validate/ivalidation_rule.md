---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for validation rules.
 
    Validation rule can validate one or multiple values
    against complex rules like: value is in range,
    one property is less than another property,
    enforce enumerated values and more.

    This interface allows to implement custom rules.
---

### Methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.
