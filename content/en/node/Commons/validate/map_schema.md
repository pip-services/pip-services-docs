---
type: docs
title: "MapSchema"
linkTitle: "MapSchema"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Schema to validate maps.
---

**Estends:** [Schema](../schema)

**Example:**
```typescript
let schema = new MapSchema(TypeCode.String, TypeCode.Integer);
  
schema.validate({ "key1": "A", "key2": "B" });       // Result: no errors
schema.validate({ "key1": 1, "key2": 2 });           // Result: element type mismatch
schema.validate([ 1, 2, 3 ]);                        // Result: type mismatch

```

### Constructors
Creates a new instance of validation schema and sets its values.
See [IValidationRule](../ivalidation_rule), [TypeCode](../convert/type_code)

> `public` constructor(keyType?: any, valueType?: any, required?: boolean, rules?: [IValidationRule](../ivalidation_rule)[])

- **keyType?**: any - a type of map keys. Null means that keys may have any type.
- **valueType?**: any - a type of map values. Null means that values may have any type.
- **required?**: boolean - (optional) true to always require non-null values.
- **rules?**: [IValidationRule](../ivalidation_rule)[] - (optional) a list with validation rules.



### Methods

#### getKeyType
Gets the type of map keys.
Null means that keys may have any type.

> `public` getKeyType(): any

- **returns**: any - the type of map keys.

#### getValueType
Gets the type of map values.
Null means that values may have any type.

> `public` getValueType(): any

- **returns**: any - the type of map values.

#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` performValidation(path: string, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.

#### setKeyType
Sets the type of map keys.
Null means that keys may have any type.

> `public` setKeyType(value: any): void

- **value**: any - a type of map keys.

#### setValueType
Sets the type of map values.
Null means that values may have any type.

> `public` setValueType(value: any): void

- **value**: any - a type of map values.