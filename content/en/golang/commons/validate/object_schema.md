---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Schema to validate user defined objects.
---

**Implements:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> NewObjectSchemaWithRules(allowUndefined bool, required bool, rules [][IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **allowUndefined**: bool - true to allow properties undefines in the schema
- **required**: bool - (optional) true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - (optional) a list with validation rules.


Creates a new validation schema and sets its values.

> NewObjectSchema() [*ObjectSchema]()



### Methods

#### AllowUndefined
Sets flag to allow undefined properties
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> (c [*ObjectSchema]()) AllowUndefined(value bool) [*ObjectSchema]()

- **value**: bool - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - this validation schema.


#### Properties
Gets validation schemas for object properties.
See [PropertySchema](../property_schema)

> (c *ObjectSchema) Properties() [][*PropertySchema](../property_schema)

- **returns**: [][*PropertySchema](../property_schema) - the list of property validation schemas.


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*ObjectSchema]()) PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - a dot notation path to the value.
- **value**: interface{} - a value to be validated.
- **results**: [][*ValidationResult](../validation_result) - a list with validation results to add new results.


#### SetUndefinedAllowed
Sets flag to allow undefined properties

> (c [*ObjectSchema]) SetUndefinedAllowed(value bool)

- **value**: bool - true to allow undefined properties and false to disallow.


#### SetProperties
Sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> (c [*ObjectSchema]()) SetProperties(value [][*PropertySchema](../property_schema))

- **value**: [][*PropertySchema](../property_schema) - a list of property validation schemas.

#### UndefinedAllowed
Gets flag to allow undefined properties

> (c [*ObjectSchema]()) UndefinedAllowed() bool

- **returns**: bool - true to allow undefined properties and false to disallow.

#### WithOptionalProperty
Adds a validation schema for an optional object property.

> (c [*ObjectSchema]()) WithOptionalProperty(name string, typ interface{}, rules ...[IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **name**: string - a property name.
- **typ**: interface{} - (optional) a property schema or type.
- **rules**: ...[IValidationRule](../ivalidation_rule) - (optional) a list of property validation rules.


#### WithProperty
Adds a validation schema for an object property.
This method returns reference to this exception to implement Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> (c [*ObjectSchema]()) WithProperty(schema [*PropertySchema](../property_schema)) [*ObjectSchema]()

- **schema**: [*PropertySchema](../property_schema) - a property validation schema to be added.
- **returns**: [ObjectSchema]() - this validation schema.


#### WithRequiredProperty
Adds a validation schema for a required object property.

> (c [*ObjectSchema]()) WithRequiredProperty(name string, typ interface{}, rules ...[IValidationRule](../ivalidation_rule)) [*ObjectSchema]()

- **name**: string - a property name.
- **typ**: interface{} - (optional) a property schema or type.
- **rules**: ...[IValidationRule](../ivalidation_rule)[] - (optional) a list of property validation rules.
- **returns**: [ObjectSchema]() - the validation schema

### Examples

```go
var schema = NewObjectSchema(false)
    .WithOptionalProperty("id", TypeCode.String)
    .WithRequiredProperty("name", TypeCode.String);

schema.validate({ id: "1", name: "ABC" });       // Result: no errors
schema.validate({ name: "ABC" });                // Result: no errors
schema.validate({ id: 1, name: "ABC" });         // Result: id type mismatch
schema.validate({ id: 1, _name: "ABC" });        // Result: name is missing, unexpected _name
schema.validate("ABC");                          // Result: type mismatch

```
