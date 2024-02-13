---
type: docs
title: "MapSchema"
linkTitle: "MapSchema"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Schema to validate maps.
---

**Inherits**: [Schema](../schema)

### Description

The MapSchema class provides you with a schema to validate maps.

### Constructors
Creates a new instance of a validation schema and sets its values.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../convert/type_code)

> `public` MapSchema(object keyType, object valueType)

- **keyType**: object  - type of map keys. Null means that keys may have any type.
- **valueType**: object  - type of map values. Null means that values may have any type.

Creates a new instance of a validation schema.

> `public` MapSchema()


### Properties

#### KeyType
Gets and sets the type of the map keys.
Null means that keys may have any type.
> `public` object KeyType { get; set; }

#### ValueType
Gets and sets the type of map values.
Null means that values may have any type.

> `public` object ValueType { get; set; }



### Instance methods


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> `protected internal override` void PerformValidation(string path, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - path to the value (in dot notation).
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples
```cs
var schema = new MapSchema(TypeCode.String, TypeCode.Integer);

schema.Validate({ "key1": "A", "key2": "B" });       // Result: no errors
schema.Validate({ "key1": 1, "key2": 2 });           // Result: element type mismatch
schema.Validate(new int[]{ 1, 2, 3 });                        // Result: type mismatch
```
