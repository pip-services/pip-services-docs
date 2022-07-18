---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule used to negate another rule.

---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The NotRule class allows you to negate a rule. Thus, when the embedded rule returns errors, then the negated rule returns no errors and vice versa.

### Constructors
Creates a new validation rule and sets its values

> NotRule(rule: [IValidationRule](../ivalidation_rule))

- **rule**: [IValidationRule](../ivalidation_rule) - a rule to be negated.



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
schema = Schema().with_rule(NotRule(ValueComparisonRule("EQ", 1)))
schema.validate(1)          # Result: error
schema.validate(5)          # Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)
