---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Schema to validate arrays.
---

**Implements:** [Schema](../schema)

**Example:** 
```python
schema = ArraySchema(TypeCode.String)

schema.validate(["A", "B", "C"])    # Result: no errors
schema.validate([1, 2, 3])          # Result: element type mismatch
schema.validate("A")                # Result: type mismatch    

```

### Constructors
Creates a new validation rule and sets its values.
See [TypeCode](../convert/type_code)

> ArraySchema(valueType: Any = None, required: bool = None, rules: List[[IValidationRule](../ivalidation_rule)] = None)

- **valueType**: Any - a type of array elements. Null means that elements may have any type.
- **required**: bool - (optional) true to always require non-null values.
- **rules**: List[[IValidationRule](../ivalidation_rule)] - (optional) a list with validation rules.

### Methods

#### get_value_type
Gets the type of array elements.
Null means that elements may have any type.

> get_value_type(): Any

- **returns**: Any - the type of array elements.


#### perform_validation
Validates a given value against the schema and configured validation rules.

> _perform_validation(path: str, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.


#### set_value_type
Sets the type of array elements.
Null means that elements may have any type.

> set_value_type(value: Any)

- **value**: Any - a type of array elements.
