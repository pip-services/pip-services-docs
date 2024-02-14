---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Schema to validate user defined objects.
---

**Extends:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> `public` ObjectSchema()


### Properties

#### isUndefinedAllowed
Gets a flag used to allow undefined properties.

> `public` boolean isUndefinedAllowed()

- **returns**: boolean - true to allow undefined properties and false to disallow.


#### setUndefinedAllowed
Sets a flag used to allow undefined properties.

> `public`  void setUndefinedAllowed(boolean value)

- **value**: boolean - true to allow undefined properties and false to disallow.

### Instance methods

#### allowUndefined
Sets a flag used to allow undefined properties.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ObjectSchema](../object_schema) allowUndefined(boolean value)

- **value**: boolean - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - validation schema.


#### getProperties
Gets validation schemas for object properties.
See [PropertySchema](../property_schema)

> `public` List<[PropertySchema](../property_schema)> getProperties()

- **returns**: List<[PropertySchema](../property_schema)> - list of property validation schemas.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` void performValidation(String path, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


#### setProperties
Sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> `public` void setProperties(List<[PropertySchema](../property_schema)> value)

- **value**: [PropertySchema](../property_schema)[] - list of property validation schemas.


#### withOptionalProperty
Adds a validation schema for an optional object property.

> `public` [ObjectSchema] withOptionalProperty(String name, Object type, [IValidationRule](../ivalidation_rule)... rules)

- **name**: String - property name.
- **type**: Object - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)... - (optional) list of property validation rules.
- **returns**: [ObjectSchema] - returns Schema with added optional property


#### withProperty
Adds a validation schema for an object property.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> `public` [ObjectSchema] withProperty([PropertySchema](../property_schema) schema)

- **schema**: [PropertySchema](../property_schema) - property validation schema to be added.
- **returns**: [ObjectSchema] - validation schema.


#### withRequiredProperty
Adds a validation schema for a required object property.

> `public` ObjectSchema withRequiredProperty(String name, Object type, [IValidationRule](../ivalidation_rule)... rules)

- **name**: String - property name.
- **type**: Object - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)... - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - validation schema.

### Examples

```java
  {@code
  ObjectSchema schema = new ObjectSchema()
       .withOptionalProperty("id", TypeCode.String)
       .withRequiredProperty("name", TypeCode.String);
 
  schema.validate({ id: "1", name: "ABC" });       // Result: no errors
  schema.validate({ name: "ABC" });                // Result: no errors
  schema.validate({ id: 1, name: "ABC" });         // Result: id type mismatch
  schema.validate({ id: 1, _name: "ABC" });        // Result: name is missing, unexpected _name
  schema.validate("ABC");                          // Result: type mismatch
  }                          // Result: type mismatch

```
