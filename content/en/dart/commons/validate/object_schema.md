---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Schema to validate user defined objects.
---

**Extends:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> ObjectSchema([bool allowUndefined, bool req, List<[IValidationRule](../ivalidation_rule)> rules])

- **allowUndefined**: bool - true to allow properties undefined in the schema.
- **required**: bool - (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list with validation rules.

### Properties

#### isUndefinedAllowed
Gets a flag used to allow undefined properties.

> bool get isUndefinedAllowed

- **returns**: bool - true to allow undefined properties and false to disallow.

Sets a flag used to allow undefined properties.

> set isUndefinedAllowed(bool value)

- **value**: bool - true to allow undefined properties and false to disallow.

### Instance methods

#### allowUndefined
Sets a flag used to allow undefined properties.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> [ObjectSchema](../object_schema) allowUndefined(bool value)

- **value**: bool - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - validation schema.


#### getProperties
Gets validation schemas for object properties.

See [PropertySchema](../property_schema)

> List<[PropertySchema](../property_schema)> getProperties()

- **returns**: List<[PropertySchema](../property_schema)> - list of property validation schemas.


#### performValidation
Validates a given value against the schema and configured validation rules.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


#### setProperties
Sets validation schemas for object properties.

See [PropertySchema](../property_schema)

> void setProperties(List<[PropertySchema](../property_schema)> value)

- **value**: [PropertySchema](../property_schema) - list of property validation schemas.


#### withOptionalProperty
Adds a validation schema for an optional object property.

> [ObjectSchema]() withOptionalProperty(String name, [dynamic type, List<[IValidationRule](../ivalidation_rule)> rules])

- **name**: String - property name.
- **type**: dynamic - (optional) property schema or type.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - returns Schema with added optional property

#### withProperty
Adds a validation schema for an object property.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

See [PropertySchema](../property_schema)

> dynamic withProperty([PropertySchema](../property_schema) schema)

- **schema**: [PropertySchema](../property_schema) - property validation schema to be added.
- **returns**: dynamic - validation schema.


#### withRequiredProperty
Adds a validation schema for a required object property.

> [ObjectSchema]() withRequiredProperty(String name, [dynamic type, List<[IValidationRule](../ivalidation_rule)> rules])

- **name**: String - property name.
- **type**: dynamic - (optional) property schema or type.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - validation schema.

### Examples

```dart
var schema =  ObjectSchema(false)
    .withOptionalProperty('id', TypeCode.String)
    .withRequiredProperty('name', TypeCode.String);

schema.validate({ id: '1', name: 'ABC' });       // Result: no errors
schema.validate({ name: 'ABC' });                // Result: no errors
schema.validate({ id: 1, name: 'ABC' });         // Result: id type mismatch
schema.validate({ id: 1, _name: 'ABC' });        // Result: name is missing, unexpected _name
schema.validate('ABC');                          // Result: type mismatch

```
