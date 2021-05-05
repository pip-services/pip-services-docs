---
type: docs
title: "OrRule"
linkTitle: "OrRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule that allows you to check combinations of rules created with OR logical operations.
    
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OrRule class allows you to validate combinations of rules created with OR logical operations.

Important points

- When one of the combined rules returns no errors, then this rule also returns no errors.
- When all combined rules return errors, then this rule returns all errors.

### Constructors
Creates a new validation rule and sets its values.

> OrRule(*rules: [IValidationRule](../ivalidation_rule))

- **rules**: [IValidationRule](../ivalidation_rule) - a list of rules to join with OR operator    

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
schema = Schema().with_rule(OrRule(ValueComparisonRule("LT", 1), ValueComparisonRule("GT", 10)))

schema.validate(0)          # Result: no error
schema.validate(5)          # Result: 5 must be less than 1 or 5 must be more than 10
schema.validate(20)         # Result: no error
```

### See also
- #### [IValidationRule](../ivalidation_rule)
