---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Schema to validate object properties
---

**Extends:** [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../convert/type_code)

> `public` PropertySchema(String name, Object type, Boolean required, List<[IValidationRule](../ivalidation_rule)> rules)

- **name**: String - (optional) property name
- **type**: Object - (optional) property type
- **required**: Boolean -  (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list with validation rules.

### Instance methods

#### getName
Gets the property name.

> `public` String getName()

- **returns**: String - property name.


#### getType
Gets the property type.

> `public` Object getType()

- **returns**: Object - property type.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `public` void performValidation(String path, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: Object - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


#### setName
Sets the property name.
> `public` void setName(String value)

- **value**: String - new property name.


#### setType
Sets a new property type.
The type can be defined as type, type name or [TypeCode](../../convert/type_code)

> `public` void setType(Object value)

- **value**: Object - new property type.


### Examples

```java
{@code
  ObjectSchema schema = new ObjectSchema().withProperty(new PropertySchema("id", TypeCode.String));
 
  schema.validate(Map.of("id", "1", "name" ,"ABC" ));	// Result: no errors
  schema.validate(Map.of( "name", "ABC" ));                    // Result: no errors
  schema.validate(Map.of( "id", 1, "name", "ABC" ));	// Result: id type mismatch
  }

```

### See also
- #### [ObjectSchema](../object_schema)
