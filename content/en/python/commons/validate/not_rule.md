---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule negate another rule.
    When embedded rule returns no errors, than this rule return an error.
    When embedded rule return errors, than the rule returns no errors.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**
```python
schema = Schema().with_rule(NotRule(ValueComparisonRule("EQ", 1)))
schema.validate(1)          # Result: error
schema.validate(5)          # Result: no error

```

### Constructors
Creates a new validation rule and sets its values

> NotRule(rule: [IValidationRule](../ivalidation_rule))

- **rule**: [IValidationRule](../ivalidation_rule) - a rule to be negated.



### Methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

### See also
- #### [IValidationRule](../ivalidation_rule)