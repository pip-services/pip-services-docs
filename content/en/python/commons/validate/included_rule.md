---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule to check that value is included into the list of constants.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**
```python
schema = new Schema().with_rule(IncludedRule(1, 2, 3))

schema.validate(2)      # Result: no errors
schema.validate(10)     # Result: 10 must be one of 1, 2, 3
```

### Constructors
Creates a new validation rule and sets its values.

> IncludedRule(*values: Any)

- **values**: Any - a list of constants that value must be included to

### Methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)]): void

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.


### See also
- #### [IValidationRule](../ivalidation_rule)
