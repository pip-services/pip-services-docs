---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Schema to validate arrays.
---

**Extends:** [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors
Creates a new validation rule and sets its values.

See [TypeCode](../convert/type_code)

> ArraySchema([dynamic valueType, bool req, List<[IValidationRule](../ivalidation_rule)> rules])

- **valueType**: dynamic - a type of array elements. Null means that elements may have any type.
- **required**: bool - (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list with validation rules.

### Instance methods

#### getValueType
Gets the type of array elements.
Null means that elements may have any type.

> dynamic getValueType()

- **returns**: dynamic - type of array elements.


#### performValidation
Validates a given value against the schema and configured validation rules.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


#### setValueType
Sets the type of array elements.
Null means that elements may have any type.

> void setValueType(dynamic value)

- **value**: dynamic - type of array elements.

### Examples 
```dart
var schema =  ArraySchema(TypeCode.String);

schema.validate(['A', 'B', 'C']);    // Result: no errors
schema.validate([1, 2, 3]);          // Result: element type mismatch
schema.validate('A');                // Result: type mismatch         

```
