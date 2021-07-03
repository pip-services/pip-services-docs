---
type: docs
title: "Schema"
linkTitle: "Schema"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public` constructor(required?: boolean, rules?: [IValidationRule](../ivalidation_rule)[])

- **required**: boolean - (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list with validation rules.


### Instance methods

#### getRules
Gets validation rules to check values against.

> `public` getRules(): [IValidationRule](../ivalidation_rule)[]

- **returns**: [IValidationRule](../ivalidation_rule)[] - list with validation rules.

#### isRequired
Gets a flag that always requires non-null values.
For null values, it raises a validation error.

> `public` isRequired(): boolean

- **returns**: boolean - true to always require non-null values and false to allow null values.

#### makeOptional
Makes validated values optional.
Validation for null values will be skipped.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` makeOptional(): [Schema]()

- **returns**: [Schema]() - validation schema


#### makeRequired
Makes validated values always required (non-null).
For null values the schema will raise errors.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` makeRequired(): [Schema]()

- **returns**: [Schema]() - validation schema

#### performTypeValidation
Validates a given value to match a specified type.
The type can be defined as a Schema, type, a type name or [TypeCode](../convert/type_code)
When type is a Schema, it executes validation recursively against that Schema.

> `protected` performTypeValidation(path: string, type: any, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **type**: any - type to match the value type
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.

#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` performValidation(path: string, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results to add new results.

#### setRequired
Sets a flag that always requires non-null values.

> `public` setRequired(value: boolean): void

- **value**: boolean - true to always require non-null values and false to allow null values.

#### setRules
Sets validation rules to check values against.

> `public` setRules(value: [IValidationRule](../ivalidation_rule)[]): void

- **value**: [IValidationRule](../ivalidation_rule)[] - list with validation rules.


#### validate
Validates the given value and returns a list with validation results.
See [ValidationResult](../validation_result)

> `public` validate(value: any): [ValidationResult](../validation_result)[]

- **value**: any - value to be validated.
- **returns**: [ValidationResult](../validation_result)[] - list with validation results.


#### validateAndReturnException
Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> `public` validateAndReturnException(correlationId: string, value: any, strict: boolean = false): [ValidationException](../validation_exception)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **value**: any -  value to be validated.
- **strict**: boolean - true to treat warnings as errors.
- **returns**: [ValidationException](../validation_exception) - validation exception.

#### validateAndThrowException
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.  
See [ValidationException.throwExceptionIfNeeded](../validation_exception/#throwexceptionifneeded)

> `public` validateAndThrowException(correlationId: string, value: any, strict: boolean = false): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **value**: any - value to be validated.
- **strict**: boolean - true to treat warnings as errors.


#### withRule
Adds validation rule to this schema.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` withRule(rule: [IValidationRule](../ivalidation_rule)): [Schema]()

- **rule**: [IValidationRule](../ivalidation_rule) - validation rule to be added.
- **returns**: [Schema]() - validation schema.



### See also
- #### [ObjectSchema](../object_schema)
- #### [PropertySchema](../property_schema) 
- #### [ArraySchema](../array_schema)
- #### [MapSchema](../map_schema)
