---
type: docs
title: "MapSchema"
linkTitle: "MapSchema"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Schema to validate maps.
---

**Extends:** [Schema](../schema)

### Description

The MapSchema class provides you with a schema to validate maps

### Constructors
Creates a new instance of validation schema and sets its values.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../convert/type_code)

> MapSchema([dynamic keyType, dynamic valueType, bool req, List<[IValidationRule](../ivalidation_rule)> rules])

- **keyType**: dynamic - type of map keys. Null means that keys may have any type.
- **valueType**: dynamic - type of map values. Null means that values may have any type.
- **required**: bool - (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list with validation rules.



### Instance methods

#### getKeyType
Gets the type of map keys.
Null means that keys may have any type.

> dynamic getKeyType()

- **returns**: dynamic - type of map keys.

#### getValueType
Gets the type of map values.
Null means that values may have any type.

> dynamic getValueType()

- **returns**: dynamic - type of map values.

#### performValidation
Validates a given value against the schema and configured validation rules.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

#### setKeyType
Sets the type of map keys.
Null means that keys may have any type.

> void setKeyType(dynamic value)

- **value**: dynamic - type of map keys.

#### setValueType
Sets the type of map values.
Null means that values may have any type.

> void setValueType(dynamic value)

- **value**: dynamic - type of map values.

### Examples
```dart
var schema =  MapSchema(TypeCode.String, TypeCode.Integer);

schema.validate({ 'key1': 'A', 'key2': 'B' });       // Result: no errors
schema.validate({ 'key1': 1, 'key2': 2 });           // Result: element type mismatch
schema.validate([ 1, 2, 3 ]);                        // Result: type mismatch

```
