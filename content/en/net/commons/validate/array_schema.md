---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Schema to validate arrays.
---

**Inherits**: [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors
Creates a new validation rule and sets its values.
See [TypeCode](../convert/type_code)

> `public` ArraySchema(object valueType)

- **valueType**: object - type of array elements. Null means that elements may have any type.


Creates a new instance of a validation schema.

> `public` ArraySchema()


### Properties

#### ValueType
Gets and Sets the type of array elements.
Null means that elements may have any type.

> `public` object ValueType { get; set; }

### Instance methods


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> `protected internal override` void PerformValidation(string path, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.


### Examples 
```cs
var schema = new ArraySchema(TypeCode.String);

schema.Validate(new String[]{"A", "B", "C"});   // Result: no errors
schema.Validate(new int[] {1, 2, 3});           // Result: element type mismatch
schema.Validate("A");                           // Result: type mismatch      

```
