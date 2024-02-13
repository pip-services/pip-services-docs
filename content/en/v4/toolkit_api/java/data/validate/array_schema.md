---
type: docs
title: "ArraySchema"
linkTitle: "ArraySchema"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Schema to validate arrays.
---

**Extends:** [Schema](../schema)

### Description

The ArraySchema class allows you to validate arrays based on a specified validation rule.

### Constructors
Creates a new validation rule and sets its values.
See [TypeCode](../../convert/type_code)

> `public` ArraySchema(Object valueType, boolean required, List<[IValidationRule](../ivalidation_rule)> rules)

- **valueType**: Object - a type of array elements. Null means that elements may have any type.
- **required**: boolean - (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list with validation rules.

### Instance methods

#### getValueType
Gets the type of array elements.
Null means that elements may have any type.

> `public` Object getValueType()

- **returns**: Object - type of array elements.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` void performValidation(String path, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: Object - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


#### setValueType
Sets the type of array elements.
Null means that elements may have any type.

> `public` void setValueType(Object value)

- **value**: Object - type of array elements.

### Examples 
```java
{@code
  ArraySchema schema = new ArraySchema(TypeCode.String);
 
  schema.validate(new String[]{"A", "B", "C"});    // Result: no errors
  schema.validate(new int[] {1, 2, 3});          // Result: element type mismatch
  schema.validate("A");                // Result: type mismatch
  }       

```
