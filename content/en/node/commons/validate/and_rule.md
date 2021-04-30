---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule to combine rules with AND logical operation.
    When all rules returns no errors, than this rule also returns no errors.
    When one of the rules return errors, than the rules returns all errors.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:** 
```python
schema = Schema().with_rule(AndRule(ValueComparisonRule("GTE", 1), ValueComparisonRule("LTE", 10)))
schema.validate(0)          # Result: 0 must be greater or equal to 1
schema.validate(5)          # Result: no error
schema.validate(20)         # Result: 20 must be letter or equal 10

```

### Constructors
Creates a new validation rule and sets its values.

> AndRule(*rules: [IValidationRule](../ivalidation_rule))

- **rules**: [IValidationRule](../ivalidation_rule) - a list of rules to join with AND operator

### Methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: [ValidationResult](../validation_result)[]): void

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.



### See also
- #### [IValidationRule](../ivalidation_rule)
