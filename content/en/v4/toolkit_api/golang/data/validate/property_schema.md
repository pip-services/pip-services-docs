---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Schema to validate object properties
---

**Implements:** [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors

#### NewPropertySchemaWithRules
Creates a new validation rule and sets its arguments.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../../commons/convert/type_code)

> NewPropertySchemaWithRules(name string, typ interface{}, required bool, rules [][IValidationRule](../ivalidation_rule)) [*PropertySchema]()

- **name**: string - (optional) property name
- **typ**: interface{} - (optional) property type
- **required**: bool -  (optional) true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - (optional) list with validation rules.

Creates a new validation schema and sets its values.

> NewPropertySchema() [*PropertySchema]()

### Methods

#### Name
Gets the property name.

> (c [*PropertySchema]()) Name() string

- **returns**: string - the property name.


#### Type
Gets the property type.

> (c [*PropertySchema]()) Type() interface{}

- **returns**: interface{} - property type.


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*PropertySchema]()) PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **value**: interface{} - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.


#### SetName
Sets the property name.

> (c [*PropertySchema]()) SetName(value string)

- **value**: string - new property name.


#### SetType
Sets a new property type.
The type can be defined as type, type name or [TypeCode](../../../commons/convert/type_code)

> (c [*PropertySchema]()) SetType(value interface{})

- **value**: interface{} - new property type.


### Examples

```go
var schema = NewObjectSchema()
	.WithProperty(NewPropertySchema("id", TypeCode.String))

schema.Validate(struct{id string
name string}{ id: "1", name: "ABC" })       // Result: no errors
schema.Validate(struct{id string
name string}{ name: "ABC" })                // Result: no errors
schema.Validate(struct{id int
name string}{ id: 1, name: "ABC" })         // Result: id type mismatch

```

### See also
- #### [ObjectSchema](../object_schema)

