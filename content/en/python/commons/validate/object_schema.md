---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Schema to validate user defined objects.
---

**Extends:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> ObjectSchema(allow_undefined: bool = False, required: bool = None, rules: List[[IValidationRule](../ivalidation_rule)] = None):

- **allow_undefined**?: bool - true to allow properties undefined in the schema
- **required**: bool - (optional) true to always require non-None values.
- **rules**: List[[IValidationRule](../ivalidation_rule)] - (optional) a list with validation rules.

### Properties

#### is_undefined_allowed
Gets flag to allow undefined properties

> is_undefined_allowed(): bool

- **returns**: bool - true to allow undefined properties and false to disallow.

Sets flag to allow undefined properties

> is_undefined_allowed(value: bool)

- **value**: bool - true to allow undefined properties and false to disallow.

### Instance methods

#### allow_undefined
Sets flag to allow undefined properties
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> allow_undefined(value: bool): [ObjectSchema](../object_schema)

- **value**: bool - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - this validation schema.


#### get_properties
Gets validation schemas for object properties.
See [PropertySchema](../property_schema)

> get_properties(): List[[PropertySchema](../property_schema)]

- **returns**: List[[PropertySchema](../property_schema)] - the list of property validation schemas.


#### perform_validation
Validates a given value against the schema and configured validation rules.

> _perform_validation(path: str, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.


#### set_properties
Sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> set_properties(value: List[[PropertySchema](../property_schema)])

- **value**: List[[PropertySchema](../property_schema)] - a list of property validation schemas.


#### with_optional_property
Adds a validation schema for an optional object property.

> with_optional_property(name: str, typ: Any, *rules: [IValidationRule](../ivalidation_rule)): [ObjectSchema]()

- **name**: str - a property name.
- **typ**: Any - (optional) a property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule) - (optional) a list of property validation rules.


#### with_property
Adds a validation schema for an object property.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> with_property(schema: [PropertySchema](../property_schema)): [ObjectSchema]()

- **schema**: [PropertySchema](../property_schema) - a property validation schema to be added.
- **returns**: [ObjectSchema]() - this validation schema.


#### with_required_property
Adds a validation schema for a required object property.

> with_required_property(name: str, typ: Any, *rules: [IValidationRule](../ivalidation_rule)): [ObjectSchema]()

- **name**: str - a property name.
- **typ**: Any - (optional) a property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule) - (optional) a list of property validation rules.

### Examples

```python
schema = ObjectSchema(false)
                    .with_optional_property("id", TypeCode.String)
                    .with_required_property("name", TypeCode.String)

schema.validate({ id: "1", name: "ABC" })  # Result: no errors
schema.validate({ name: "ABC" })           # Result: no errors
schema.validate({ id: 1, name: "ABC" })    # Result: id type mismatch
schema.validate({ id: 1, __name: "ABC" })  # Result: name is missing, unexpected __name
schema.validate("ABC")                     # Result: type mismatch
```
