---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Validation rule that checks that at least one of the object's properties exists.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AtLeastOneExistsRule class allows you to check that given a set of properties, at least one of them exists. 

### Constructors
Creates a new validation rule and sets its values

> AtLeastOneExistsRule(List\<String\> properties)

- **properties**: List\<String\> - list of property names where at least one property must exist

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void validate(String path, [Schema](../schema) schema, dynamic value, List<[ValidationRule](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationRule](../validation_result)> - list with validation results.

### Examples
```dart
var schema =  Schema()
    .withRule( AtLeastOneExistsRule('field1', 'field2'));

schema.validate({ field1: 1, field2: 'A' });     // Result: no errors
schema.validate({ field1: 1 });                  // Result: no errors
schema.validate({ });                            // Result: at least one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
