---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule to check that one or more values are excluded from the list of constants.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors
Creates a new validation rule and sets its values

> ExcludedRule(*values: Any)

- **values**: Any - a list of constants that value must be excluded from

### Methods

#### validate
Validates the given value. None of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)]) 

- **path**: str - the dot notation path to the value that is to be validated.
- **schema**: [Schema](../schema) - (not used in this implementation).
- **value**: Any - the value that is to be validated.
- **results**: List[[ValidationResult](../validation_result)] - the results of the validation.

### Examples

```python
schema = Schema().with_rule(ExcludedRule(1, 2, 3))
schema.validate(2)      # Result: 2 must not be one of 1, 2, 3
schema.validate(10)     # Result: no errors
```

### See also
- #### [IValidationRule](../ivalidation_rule)
