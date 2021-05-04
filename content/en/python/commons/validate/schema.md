---
type: docs
title: "Schema"
linkTitle: "Schema"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Basic schema that validates values against a set of validation rules.

    This schema is used as a basis for specific schemas to validate 
    objects, project properties, arrays and maps.
---

See also [ObjectSchema](../object_schema), [PropertySchema](../property_schema), 
[ArraySchema](../array_schema), [MapSchema](../map_schema)

### Constructors
Creates a new instance of validation schema and sets its values.

See [IValidationRule](../ivalidation_rule)

> Schema(required: bool, rules: List[[IValidationRule](../ivalidation_rule)])

- **required**: bool - (optional) true to always require non-null values.
- **rules**: List[[IValidationRule](../ivalidation_rule)] - (optional) a list with validation rules.


### Methods

#### get_rules
Gets validation rules to check values against.

> get_rules(): List[[IValidationRule](../ivalidation_rule)]

- **returns**: List[[IValidationRule](../ivalidation_rule)] - a list with validation rules.

#### is_required
Gets a flag that always requires non-null values.
For null values it raises a validation error.

> is_required(): bool

- **returns**: bool - true to always require non-null values and false to allow null values.

#### make_optional
Makes validated values optional.
Validation for null values will be skipped.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> make_optional(): [Schema]()

- **returns**: [Schema]() - this validation schema


#### make_required
Makes validated values always required (non-null).
For null values the schema will raise errors.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> make_required(): [Schema]()

- **returns**: [Schema]() - this validation schema

#### perform_type_validation
Validates a given value to match specified type.
The type can be defined as a Schema, type, a type name or [TypeCode](../convert/type_code)
When type is a Schema, it executes validation recursively against that Schema.

> _perform_type_validation(path: str, type: Any, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **type**: Any - a type to match the value type
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

#### perform_validation
Validates a given value against the schema and configured validation rules.

> _perform_validation(path: str, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

#### set_required
Sets a flag that always requires non-null values.

> set_required(value: bool)

- **value**: bool - true to always require non-null values and false to allow null values.

#### set_rules
Sets validation rules to check values against.

> set_rules(value: List[[IValidationRule](../ivalidation_rule)])

- **value**: List[[IValidationRule](../ivalidation_rule)] - a list with validation rules.


#### validate
Validates the given value and results validation results.
See [ValidationResult](../validation_result)

> validate(value: Any): List[[IValidationRule](../ivalidation_rule)]

- **value**: Any - a value to be validated.
- **returns**: List[[IValidationRule](../ivalidation_rule)] - a list with validation results.


#### validate_and_return_exception
Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> validate_and_return_exception(correlation_id: Optional[str], value: Any, strict: bool = False): [ValidationException](../validation_exception)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **value**: Any -  a value to be validated.
- **strict**: boolean = false - true to treat warnings as errors.
- **returns**: [ValidationException](../validation_exception) - TODO add description here

#### validate_and_throw_exception
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.  
See [ValidationException.throw_exception_if_needed](../validation_exception/#throw_exception_if_needed)

> validate_and_throw_exception(correlation_id: Optional[str], value: Any, strict: boolean = false)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **value**: Any - a value to be validated.
- **strict**: bool = false - true to treat warnings as errors.


#### with_rule
Adds validation rule to this schema.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_rule(rule: [IValidationRule](../ivalidation_rule)): [Schema]()

- **rule**: [IValidationRule](../ivalidation_rule) - a validation rule to be added.
- **returns**: [Schema]() - this validation schema.



### See also
- #### [ObjectSchema](../object_schema)
- #### [PropertySchema](../property_schema) 
- #### [ArraySchema](../array_schema)
- #### [MapSchema](../map_schema)
