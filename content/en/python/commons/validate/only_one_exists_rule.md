---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule that check that at exactly one of the object properties is not null.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**

```python
schema = Schema().with_rule(OnlyOneExistsRule("field1", "field2"))

schema.validate({ field1: 1, field2: "A" })     # Result: only one of properties field1, field2 must exist
schema.validate({ field1: 1 })                  # Result: no errors
schema.validate({ })                            # Result: only one of properties field1, field2 must exist

```

### Constructors
Creates a new validation rule and sets its values

> OnlyOneExistsRule(*properties: str)

- **properties**: str - a list of property names where at only one property must exist

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