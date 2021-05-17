---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Schema to validate object properties
---

**Implements:** [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [IValidationRule](../ivalidation_rule), [TypeCode](../convert/type_code)

> PropertySchema(name: str, typ: Any, required: bool, rules: List[[IValidationRule](../ivalidation_rule)])

- **name**: str - (optional) a property name
- **typ**: Any - (optional) a property type
- **required**: bool -  (optional) true to always require non-None values.
- **rules**: List[[IValidationRule](../ivalidation_rule)] - (optional) a list with validation rules.

### Instance methods

#### get_name
Gets the property name.

> get_name(): str

- **returns**: str - the property name.


#### getType
Gets the property type.

> get_type(): Any

- **returns**: Any - the property type.


#### perform_validation
Validates a given value against the schema and configured validation rules.

> _perform_validation(path: str, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.


#### set_name
Sets the property name.

> set_name(value: str)

- **value**: str - a new property name.


#### set_type
Sets a new property type.
The type can be defined as type, type name or [TypeCode](../convert/type_code)

> set_type(value: Any)

- **value**: str - a new property type.

### Examples

```python
schema = ObjectSchema().with_property(PropertySchema("id", TypeCode.String))

schema.validate({ id: "1", name: "ABC" })       # Result: no errors
schema.validate({ name: "ABC" })                # Result: no errors
schema.validate({ id: 1, name: "ABC" })         # Result: id type mismatch

```

### See also
- #### [ObjectSchema](../object_schema)
