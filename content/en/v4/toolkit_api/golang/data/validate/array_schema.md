---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Schema to validate arrays.
---

**Implements:** [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors

#### NewArraySchema
Creates a new validation rule and sets its values.
See [TypeCode](../../../commons/convert/type_code)

> NewArraySchema(valueType any) [*ArraySchema]()

- **valueType**: any - type of array elements. Null means that elements may have any type.

### Methods

#### ValueType
Gets the type of array elements.
Null means that elements may have any type.

> (c *ArraySchema) ValueType() any

- **returns**: any - type of array elements.


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*ArraySchema]()) PerformValidation(path string, value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **returns**: [][*ValidationResult](../validation_result) - list with validation results to add new results.


#### SetValueType
Sets the type of array elements.
Null means that the elements may have any type.

> (c [*ArraySchema]()) SetValueType(value any)

- **value**: any - type of array elements.

### Examples 
```go
schema := NewArraySchema(TypeCode.String)

schema.Validate(["A", "B", "C"])    // Result: no errors
schema.Validate([1, 2, 3])          // Result: element type mismatch
schema.Validate("A")                // Result: type mismatch     

```

