---
type: docs
title: "Schema"
linkTitle: "Schema"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Basic schema used to validate values against a set of validation rules.

   
---

### Description

The Schema class provides a basic schema to validate values against a set of validation rules.

**Important points**

- This schema is used as a basis for specific schemas to validate objects, project properties, arrays and maps.

### Constructors
Creates a new instance of validation schema and sets its values.

See [IValidationRule](../ivalidation_rule)

> Schema([bool req, List<[IValidationRule](../ivalidation_rule)> rules])

- **required**: bool - (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list with validation rules.


### Instance methods

#### getRules
Gets validation rules to check values against.

> List<[IValidationRule](../ivalidation_rule)> getRules()

- **returns**: List<[IValidationRule](../ivalidation_rule)> - list with validation rules.

#### isRequired
Gets a flag that always requires non-null values.
For null values, it raises a validation error.

> bool isRequired()

- **returns**: bool - true to always require non-null values and false to allow null values.

#### makeOptional
Makes validated values optional.
Validation for null values will be skipped.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> [Schema]() makeOptional()

- **returns**: [Schema]() - validation schema


#### makeRequired
Makes validated values always required (non-null).
For null values the schema will raise errors.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> [Schema]() makeRequired()

- **returns**: [Schema]() - validation schema

#### performTypeValidation
Validates a given value to match a specified type.
The type can be defined as a Schema, type, a type name or [TypeCode](../../convert/type_code)
When type is a Schema, it executes validation recursively against that Schema.

> void performTypeValidation(String path, dynamic type, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **type**: dynamic - type to match the value type
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.

#### performValidation
Validates a given value against the schema and configured validation rules.

> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

#### setRequired
Sets a flag that always requires non-null values.

> void setRequired(bool value)

- **value**: bool - true to always require non-null values and false to allow null values.

#### setRules
Sets validation rules to check values against.

> void setRules(List<[IValidationRule](../ivalidation_rule)> value)

- **value**: List<[IValidationRule](../ivalidation_rule)> - list with validation rules.


#### validate
Validates the given value and returns a list with validation results.

See [ValidationResult](../validation_result)

> List<[ValidationResult](../validation_result)> validate(dynamic value)

- **value**: dynamic - value to be validated.
- **returns**: List<[ValidationResult](../validation_result)> - list with validation results.


#### validateAndReturnException
Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> [ValidationException](../validation_exception) validateAndReturnException(String correlationId, dynamic value, [bool strict = false])

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **value**: dynamic -  value to be validated.
- **strict**: bool - true to treat warnings as errors.
- **returns**: [ValidationException](../validation_exception) - validation exception.

#### validateAndThrowException
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.  

See [ValidationException.throwExceptionIfNeeded](../validation_exception/#throwexceptionifneeded)

> void validateAndThrowException(String correlationId, dynamic value, [bool strict = false])

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **value**: dynamic - value to be validated.
- **strict**: bool - true to treat warnings as errors.


#### withRule
Adds a validation rule to this schema.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> [Schema]() withRule([IValidationRule](../ivalidation_rule) rule)

- **rule**: [IValidationRule](../ivalidation_rule) - validation rule to be added.
- **returns**: [Schema]() - validation schema.



### See also
- #### [ObjectSchema](../object_schema)
- #### [PropertySchema](../property_schema) 
- #### [ArraySchema](../array_schema)
- #### [MapSchema](../map_schema)
