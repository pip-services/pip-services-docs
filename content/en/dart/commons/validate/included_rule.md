---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Validation rule used to check that a list contains only specified values.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> IncludedRule(List\<dynamic\> values)

- **values**: List\<dynamic\> - list of constants with values that must be included.

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
    .withRule( IncludedRule(1, 2, 3));

schema.validate(2);      // Result: no errors
schema.validate(10);     // Result: 10 must be one of 1, 2, 3
```

### See also
- #### [IValidationRule](../ivalidation_rule)
