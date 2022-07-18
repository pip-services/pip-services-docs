---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Schema to validate object properties.
---

**Inherits**: [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../convert/type_code)

> `public` PropertySchema(string name, object type)

- **name**: string - (optional) property name
- **type**: object - (optional) property type


Creates a new validation schema.

> `public` PropertySchema()

### Properties

#### Name
Gets and sets the property name.

> `public` string Name { get; set; }

#### Type
Gets and sets the property type.
The type can be defined as type, type name or [TypeCode](../../convert/type_code)

> `public` object Type { get; set; }

### Instance methods


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> `public internal override` void PerformValidation(string path, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - path to the value dot notation.
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.


### Examples

```cs
var schema = new ObjectSchema().WithProperty(new PropertySchema("id", TypeCode.String));

schema.Validate({ id: "1", name: "ABC" });       // Result: no errors
schema.Validate({ name: "ABC" });                // Result: no errors
schema.Validate({ id: 1, name: "ABC" });         // Result: id type mismatch

```

### See also
- #### [ObjectSchema](../object_schema)
