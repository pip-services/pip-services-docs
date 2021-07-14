---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors
Creates a new validation rule and sets its values. 

> OnlyOneExistsRule(List\<String\> properties)

- **properties**: List\<String\> - list of property names where only one property must exist

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples

```dart
var schema =  Schema()
    .withRule( OnlyOneExistsRule('field1', 'field2'));

schema.validate({ field1: 1, field2: 'A' });     // Result: only one of properties field1, field2 must exist
schema.validate({ field1: 1 });                  // Result: no errors
schema.validate({ });                            // Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
