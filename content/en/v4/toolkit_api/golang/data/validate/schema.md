---
type: docs
title: "Schema"
linkTitle: "Schema"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Basic schema used to validate values against a set of validation rules.

   
---

### Description

The Schema class provides a basic schema to validate values against a set of validation rules.

Important points

- This schema is used as a basis for specific schemas to validate objects, project properties, arrays and maps.

### Constructors


#### NewSchemaWithRules
Creates a new instance of a validation schema and sets its values.

See [IValidationRule](../ivalidation_rule)

> NewSchemaWithRules(required bool, rules [][IValidationRule](../ivalidation_rule)) [*Schema]()

- **required**: bool - (optional) true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - (optional) list with validation rules.

#### InheritSchema
Inherits a schema

> InheritSchema(base [ISchemaBase](../ischema_base)) [*Schema]

#### InheritSchemaWithRules
Inherits a schema with rules

> InheritSchemaWithRules(base [ISchemaBase](../ischema_base), required bool, rules [][IValidationRule](../ivalidation_rule)) [*Schema]()

- **base**: [ISchemaBase](../ischema_base) - base foe create new schema
- **required**: bool - true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - list with validation rules.

#### NewSchema
Creates a new instance of validation schema and sets its values.

> NewSchema() [*Schema]()


### Methods

#### GetRules
Gets validation rules to check values against.

> (c [*Schema]()) Rules() [][IValidationRule](../ivalidation_rule)

- **returns**: [][IValidationRule](../ivalidation_rule) - list with validation rules.

#### Required
Gets a flag that always requires non-nil values.
For nil values it raises a validation error.

> (c [*Schema]()) Required() bool

- **returns**: bool - true to always require non-nil values and false to allow nil values.

#### MakeOptional
Makes validated values optional.
Validation for nil values will be skipped.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> (c [*Schema]()) MakeOptional() [*Schema]()

- **returns**: [Schema]() - validation schema


#### MakeRequired
Makes validated values always required (non-nil).
For nil values the schema will raise errors.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> (c [*Schema]()) MakeRequired() [*Schema]()

- **returns**: [*Schema]() - this validation schema

#### PerformTypeValidation
Validates a given value to match a specified type.
The type can be defined as a Schema, type, a type name or [TypeCode](../../../commons/convert/type_code)
When type is a Schema, it executes validation recursively against that Schema.

> (c [*Schema]()) PerformTypeValidation(path string, typ any, value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **type**: any - type to match the value type
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.

#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*Schema]()) PerformValidation(path string, value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.

#### SetRequired
Sets a flag that always requires non-nil values.

> (c [*Schema]()) SetRequired(value bool)

- **value**: bool - true to always require non-nil values and false to allow nil values.

#### SetRules
Sets validation rules to check values against.

> (c [*Schema]()) SetRules(value [][IValidationRule](../ivalidation_rule))

- **value**: [][IValidationRule](../ivalidation_rule) - list with validation rules.


#### Validate
Validates the given value and results validation results.
See [ValidationResult](../validation_result)

> (c [*Schema]()) Validate(value any) [][*IValidationRule](../ivalidation_rule)

- **value**: any - value to be validated.
- **returns**: [][*IValidationRule](../ivalidation_rule) - list with validation results.


#### ValidateAndReturnError
Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> (c [*Schema]()) ValidateAndReturnError(correlationId string, value any, strict bool) [*errors.ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **value**: any -  value to be validated.
- **strict**: bool - true to treat warnings as errors.
- **returns**: [*errors.ApplicationError](../../../commons/errors/application_error) - validation exception.

#### ValidateAndThrowError
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.  
See [ValidationException.ThrowExceptionIfNeeded](../validation_exception/#throwexceptionifneeded)

> (c [*Schema]()) ValidateAndThrowError(correlationId string, value any, strict bool)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **value**: any - value to be validated.
- **strict**: bool - true to treat warnings as errors.


#### WithRule
Adds validation rule to this schema.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> (c [*Schema]()) WithRule(rule [IValidationRule](../ivalidation_rule)) [*Schema]()

- **rule**: [IValidationRule](../ivalidation_rule) - validation rule to be added.
- **returns**: [*Schema]() - this validation schema.



### See also
- #### [ObjectSchema](../object_schema)
- #### [PropertySchema](../property_schema) 
- #### [ArraySchema](../array_schema)
- #### [MapSchema](../map_schema)

