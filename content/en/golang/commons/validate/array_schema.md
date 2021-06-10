---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Schema to validate arrays.
---

**Implements:** [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors
Creates a new validation rule and sets its values.
See [TypeCode](../convert/type_code)

> NewArraySchema(valueType interface{}) [*ArraySchema]()

- **valueType**: interface{} - a type of array elements. Null means that elements may have any type.

### Methods

#### ValueType
Gets the type of array elements.
Null means that elements may have any type.

> (c *ArraySchema) ValueType() interface{}

- **returns**: interface{} - the type of array elements.


#### PerformValidation
Validates a given value against the schema and configured validation rules.

> (c [*ArraySchema]()) PerformValidation(path string, value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - a dot notation path to the value.
- **value**: interface{} - a value to be validated.
- **returns**: [][*ValidationResult](../validation_result) - a list with validation results to add new results.


#### SetValueType
Sets the type of array elements.
Null means that elements may have any type.

> (c [*ArraySchema]()) SetValueType(value interface{})

- **value**: interface{} - a type of array elements.

### Examples 
```go
schema := NewArraySchema(TypeCode.String);
 
schema.Validate(["A", "B", "C"]);    // Result: no errors
schema.Validate([1, 2, 3]);          // Result: element type mismatch
schema.Validate("A");                // Result: type mismatch       

```
