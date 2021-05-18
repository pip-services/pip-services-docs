---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Schema to validate arrays.
---

**Extends:** [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors
Creates a new validation rule and sets its values.
See [TypeCode](../convert/type_code)

> `public` constructor(valueType?: any, required?: boolean, rules?: [IValidationRule](../ivalidation_rule)[])

- **valueType**: any - a type of array elements. Null means that elements may have any type.
- **required**: boolean - (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) a list with validation rules.

### Instance methods

#### getValueType
Gets the type of array elements.
Null means that elements may have any type.

> `public` getValueType(): any

- **returns**: any - the type of array elements.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` performValidation(path: string, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.


#### setValueType
Sets the type of array elements.
Null means that elements may have any type.

> `public` setValueType(value: any): void

- **value**: any - a type of array elements.

### Examples 
```typescript
let schema = new ArraySchema(TypeCode.String);
   
schema.validate(["A", "B", "C"]);    // Result: no errors
schema.validate([1, 2, 3]);          // Result: element type mismatch
schema.validate("A");                // Result: type mismatch          

```
