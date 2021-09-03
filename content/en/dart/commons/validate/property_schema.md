---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Schema to validate object properties
---

**Extends:** [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors
Creates a new validation rule and sets its arguments.

See [IValidationRule](../ivalidation_rule), [TypeCode](../convert/type_code)

> PropertySchema([String name, dynamic type, bool req, List<[IValidationRule](../ivalidation_rule)> rules])

- **name**: String - (optional) property name
- **type**: dynamic - (optional) property type
- **required**: bool -  (optional) true to always require non-null values.
- **rules**: List<[IValidationRule](../ivalidation_rule)> - (optional) list with validation rules.

### Instance methods

#### getName
Gets the property name.

> String getName()

- **returns**: String - property name.


#### getType
Gets the property type.

> dynamic getType()

- **returns**: dynamic - property type.


#### performValidation
Validates a given value against the schema and configured validation rules.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


#### setName
Sets the property name.

> void setName(String value)

- **value**: String - new property name.


#### setType
Sets a new property type.
The type can be defined as type, type name or [TypeCode](../../convert/type_code)

> void setType(dynamic value)

- **value**: dynamic - new property type.


### Examples

```dart
var schema =  ObjectSchema()
    .withProperty( PropertySchema('id', TypeCode.String));

schema.validate({ id: '1', name: 'ABC' });       // Result: no errors
schema.validate({ name: 'ABC' });                // Result: no errors
schema.validate({ id: 1, name: 'ABC' });         // Result: id type mismatch

```

### See also
- #### [ObjectSchema](../object_schema)
