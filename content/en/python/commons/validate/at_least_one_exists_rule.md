---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule that checks that at least one of the object properties exists.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AtLeastOneExistsRule class allows you to check that given a set of properties, at least one of them exists. 

### Constructors
Creates a new validation rule and sets its values

> AtLeastOneExistsRule(*properties: str)

- **properties**: str - a list of property names where at least one property must exist

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
schema = Schema().with_rule(AtLeastOneExistsRule("field1", "field2"))

schema.validate({ field1: 1, field2: "A" })     # Result: no errors
schema.validate({ field1: 1 })                  # Result: no errors
schema.validate({ })                            # Result: at least one of properties field1, field2 must exist
```

### See also
- #### [IValidationRule](../ivalidation_rule)
