---
type: docs
title: "MapSchema"
linkTitle: "MapSchema"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Schema to validate maps.
---

**Implements:** [Schema](../schema)

### Description

The MapSchema class provides you with a schema to validate maps.

### Constructors

#### NewMapSchemaWithRules
Creates a new instance of a validation schema and sets its values.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../../commons/convert/type_code)

> NewMapSchemaWithRules(keyType any, valueType any, required bool, rules [][IValidationRule](../ivalidation_rule)) [*MapSchema]()

- **keyType**: any - type of map keys. Null means that keys may have any type.
- **valueType**: any - type of map values. Null means that values may have any type.
- **required**: bool - (optional) true to always require non-nil values.
- **rules**: [][IValidationRule](../ivalidation_rule) - (optional) list with validation rules.

#### NewMapSchema
Creates a new instance of a validation schema and sets its values.

> NewMapSchema(keyType any, valueType any) [*MapSchema]()

- **keyType**: any - type of map keys. Null means that keys may have any type.
- **valueType**: any - type of map values. Null means that values may have any type.


### Methods

#### KeyType
Gets the type of map keys.
Null means that keys may have any type.

> (c [*MapSchema]()) KeyType() any

- **returns**: any - type of map keys.

#### ValueType
Gets the type of map values.
Null means that the values may have any type.

> (c [*MapSchema]()) ValueType() any

- **returns**: any - type of map values.

#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*MapSchema]()) PerformValidation(path string, value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **returns**: [][*ValidationResult](../validation_result) - list with validation results to add new results.

#### SetKeyType
Sets the type of map keys.
Null means that keys may have any type.

> (c [*MapSchema]()) SetKeyType(value any)

- **value**: any - type of map keys.

#### SetValueType
Sets the type of map values.
Null means that values may have any type.

> (c [*MapSchema]()) SetValueType(value any)

- **value**: any - type of map values.

### Examples
```go
var schema = NewMapSchema(TypeCode.String, TypeCode.Integer);

schema.Validate(map[string]string{ "key1": "A", "key2": "B" });       // Result: no errors
schema.Validate(map[string]int{ "key1": 1, "key2": 2 });           // Result: element type mismatch
schema.Validate([]int{ 1, 2, 3 });                        // Result: type mismatch

```

