---
type: docs
title: "Schema"
linkTitle: "Schema"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Basic schema used to validate values against a set of validation rules.

   
---

### Description

The Schema class provides a basic schema to validate values against a set of validation rules.

Important points

- This schema is used as a basis for specific schemas to validate objects, project properties, arrays and maps.

### Constructors
Creates a new instance of validation schema and sets its values.

See [IValidationRule](../ivalidation_rule)

> `public` Schema(bool required, List<[IValidationRule](../ivalidation_rule)> rules)

- **required**: bool - (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) a list with validation rules.


### Properties

#### IsRequired
Gets and sets a flag that always requires non-null values.
For null values it raises a validation error.

> `public` bool IsRequired [ get, set ]

#### Rules
Gets and sets validation rules to check values against.

> `public` List<[IValidationRule](../ivalidation_rule)> Rules [ get, set ]


### Instance methods

#### MakeOptional
Makes validated values optional.
Validation for null values will be skipped.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` [Schema]() MakeOptional()

- **returns**: [Schema]() - this validation schema


#### MakeRequired
Makes validated values always required (non-null).
For null values the schema will raise errors.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` [Schema]() MakeRequired()

- **returns**: [Schema]() - this validation schema

#### PerformTypeValidation
Validates a given value to match specified type.
The type can be defined as a Schema, type, a type name or [TypeCode](../convert/type_code)
When type is a Schema, it executes validation recursively against that Schema.

> `protected` void PerformTypeValidation(string path, object type, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - a dot notation path to the value.
- **type**: any - a type to match the value type
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.

#### PerformValidation
Validates a given value against the schema and configured validation rules.

> `protected internal override` void PerformValidation(string path, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - a dot notation path to the value.
- **value**: object - a value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - a list with validation results to add new results.


#### Validate
Validates the given value and results validation results.
See [ValidationResult](../validation_result)

> `public` List<[ValidationResult](../validation_result)> Validate(object value)

- **value**: object - a value to be validated.
- **returns**: List<[ValidationResult](../validation_result)> - a list with validation results.


#### ValidateAndReturnException!
**TODO: this method is not realized yet for this language**

Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> `public` [ValidationException](../validation_exception) ValidateAndReturnException(string correlationId, object value, bool strict = false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **value**: object -  a value to be validated.
- **strict**: bool - true to treat warnings as errors.
- **returns**: [ValidationException](../validation_exception) - validation exception.

#### ValidateAndThrowException
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.  
See [ValidationException.throwExceptionIfNeeded](../validation_exception/#throwexceptionifneeded)

> `public` void ValidateAndThrowException(string correlationId, object value, bool strict = false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **value**: object - a value to be validated.
- **strict**: bool - true to treat warnings as errors.


#### WithRule
Adds validation rule to this schema.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` [Schema]() WithRule([IValidationRule](../ivalidation_rule) rule)

- **rule**: [IValidationRule](../ivalidation_rule) - a validation rule to be added.
- **returns**: [Schema]() - this validation schema.



### See also
- #### [ObjectSchema](../object_schema)
- #### [PropertySchema](../property_schema) 
- #### [ArraySchema](../array_schema)
- #### [MapSchema](../map_schema)
