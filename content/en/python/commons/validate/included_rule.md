---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule to check that a list contains only specified values.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> IncludedRule(*values: Any)

- **values**: Any - a list of constants that value must be included to

### Instance methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

### Examples
```python
schema = new Schema().with_rule(IncludedRule(1, 2, 3))

schema.validate(2)      # Result: no errors
schema.validate(10)     # Result: 10 must be one of 1, 2, 3
```

### See also
- #### [IValidationRule](../ivalidation_rule)
