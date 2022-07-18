---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Schema to validate user defined objects.
---

**Inherits**: [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema. 
See [IValidationRule](../ivalidation_rule)

> `public` ObjectSchema()


### Properties

#### IsUndefinedAllowed 
Gets and sets a flag to allow undefined properties. 
True to allow undefined properties and false to disallow.

> `public` bool IsUndefinedAllowed { get; set; }


#### Properties 
Gets and sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> `public` List<[PropertySchema](../property_schema)> Properties [get, set]


### Instance methods

#### AllowUndefined
Sets a flag to allow undefined properties. 
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ObjectSchema](../object_schema) AllowUndefined(bool value)

- **value**: bool - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - validation schema.



#### PerformValidation
Validates a given value against the schema and configured validation rules.

> `protected internal override` void PerformValidation(string path, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.


#### WithOptionalProperty
Adds a validation schema for an optional object property.

> `public` [ObjectSchema]() WithOptionalProperty(string name, object type, params [IValidationRule](../ivalidation_rule)[] rules)

- **name**: string - property name.
- **type**: object - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - returns Schema with added optional property


#### WithProperty
Adds a validation schema for an object property.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> `public` [ObjectSchema]() WithProperty([PropertySchema](../property_schema) schema)

- **schema**: [PropertySchema](../property_schema) - property validation schema to be added.
- **returns**: [ObjectSchema]() - validation schema.


#### WithRequiredProperty
Adds a validation schema for a required object property.

> `public` [ObjectSchema]() WithRequiredProperty(string name, object type, params [IValidationRule](../ivalidation_rule)[] rules)

- **name**: string - property name.
- **type**: object - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - validation schema


### Examples

```cs
var schema = new ObjectSchema().WithOptionalProperty("id", TypeCode.String)
                               .WithRequiredProperty("name", TypeCode.String);

schema.Validate({ id: "1", name: "ABC" });       // Result: no errors
schema.Validate({ name: "ABC" });                // Result: no errors
schema.Validate({ id: 1, name: "ABC" });         // Result: id type mismatch
schema.Validate({ id: 1, _name: "ABC" });        // Result: name is missing, unexpected _name
schema.Validate("ABC");                          // Result: type mismatch

```
