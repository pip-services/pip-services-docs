---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Schema to validate user defined objects.
---

**Implements:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors

#### NewObjectSchemaWithRules
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> NewObjectSchemaWithRules(allowUndefined bool, required bool, rules [][IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **allowUndefined**: bool - true to allow properties undefines in the schema
- **required**: bool - (optional) true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - (optional) list with validation rules.

#### NewObjectSchema
Creates a new validation schema and sets its values.

> NewObjectSchema() [*ObjectSchema]()



### Methods

#### AllowUndefined
Sets a flag to allow for nil properties
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> (c [*ObjectSchema]()) AllowUndefined(value bool) [*ObjectSchema]()

- **value**: bool - true to allow nil properties and false otherwise.
- **returns**: [ObjectSchema](../object_schema) - validation schema.


#### Properties
Gets validation schemas for object properties.
See [PropertySchema](../property_schema)

> (c *ObjectSchema) Properties() [][*PropertySchema](../property_schema)

- **returns**: [][*PropertySchema](../property_schema) - list of property validation schemas.


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*ObjectSchema]()) PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **value**: interface{} - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.


#### SetUndefinedAllowed
Sets a flag to allow for nil properties

> (c [*ObjectSchema]) SetUndefinedAllowed(value bool)

- **value**: bool - true to allow for nil properties and false otherwise.


#### SetProperties
Sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> (c [*ObjectSchema]()) SetProperties(value [][*PropertySchema](../property_schema))

- **value**: [][*PropertySchema](../property_schema) - list of property validation schemas.

#### UndefinedAllowed
Gets a flag to allow for nil properties

> (c [*ObjectSchema]()) UndefinedAllowed() bool

- **returns**: bool - true to allow for nil properties and false otherwise.

#### WithOptionalProperty
Adds a validation schema for an optional object property.

> (c [*ObjectSchema]()) WithOptionalProperty(name string, typ interface{}, rules ...[IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **name**: string - property name.
- **typ**: interface{} - (optional) property schema or type.
- **rules**: ...[IValidationRule](../ivalidation_rule) - (optional) list of property validation rules.
- **returns**: [*ObjectSchema]() - returns Schema with added optional property


#### WithProperty
Adds a validation schema for an object property.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> (c [*ObjectSchema]()) WithProperty(schema [*PropertySchema](../property_schema)) [*ObjectSchema]()

- **schema**: [*PropertySchema](../property_schema) - property validation schema to be added.
- **returns**: [ObjectSchema]() - validation schema.


#### WithRequiredProperty
Adds a validation schema for a required object property.

> (c [*ObjectSchema]()) WithRequiredProperty(name string, typ interface{}, rules ...[IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **name**: string - property name.
- **typ**: interface{} - (optional) property schema or type.
- **rules**: ...[IValidationRule](../ivalidation_rule)[] - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - validation schema

### Examples

```go
schema.Validate(struct {
	id   string
	name string
}{id: "1", name: "ABC"}) // Result: no errors

schema.Validate(struct {
	id   string
	name string
}{name: "ABC"}) // Result: no errors

schema.Validate(struct {
	id   int
	name string
}{id: 1, name: "ABC"}) // Result: id type mismatch

schema.Validate(struct {
	id    int
	_name string
}{id: 1, _name: "ABC"}) // Result: name is missing, unexpected_name

schema.Validate("ABC")
```

