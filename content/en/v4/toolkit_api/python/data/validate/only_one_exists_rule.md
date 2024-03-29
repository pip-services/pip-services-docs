---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-data-python"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors
Creates a new validation rule and sets its values

> OnlyOneExistsRule(*properties: str)

- **properties**: str - a list of property names where at only one property must exist

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
schema = Schema().with_rule(OnlyOneExistsRule("field1", "field2"))

schema.validate({ field1: 1, field2: "A" })     # Result: only one of properties field1, field2 must exist
schema.validate({ field1: 1 })                  # Result: no errors
schema.validate({ })                            # Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
