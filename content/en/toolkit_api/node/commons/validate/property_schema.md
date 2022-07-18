---
type: docs
title: "PropertySchema"
linkTitle: "PropertySchema"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Schema to validate object properties
---

**Extends:** [Schema](../schema)

### Description

The PropertySchema class allows you to create schemas to validate object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [IValidationRule](../ivalidation_rule), [TypeCode](../convert/type_code)

> `public` constructor(name?: string, type?: any, required?: boolean, rules?: [IValidationRule](../ivalidation_rule)[])

- **name**: string - (optional) property name
- **type**: any - (optional) property type
- **required**: boolean -  (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list with validation rules.

### Instance methods

#### getName
Gets the property name.

> `public` getName(): string

- **returns**: string - property name.


#### getType
Gets the property type.

> `public` getType(): any

- **returns**: any - property type.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `public` performValidation(path: string, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


#### setName
Sets the property name.

> `public` setName(value: string): void

- **value**: string - new property name.


#### setType
Sets a new property type.
The type can be defined as type, type name or [TypeCode](../convert/type_code)

> `public` setType(value: any): void

- **value**: string - new property type.


### Examples

```typescript
let schema = new ObjectSchema()
    .withProperty(new PropertySchema("id", TypeCode.String));
    
schema.validate({ id: "1", name: "ABC" });       // Result: no errors
schema.validate({ name: "ABC" });                // Result: no errors
schema.validate({ id: 1, name: "ABC" });         // Result: id type mismatch

```

### See also
- #### [ObjectSchema](../object_schema)
