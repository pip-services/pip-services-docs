---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
   Validation rule that compares a value to a constant.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors
Creates a new validation rule and sets its values.

> ValueComparisonRule(String operation, dynamic value)

- **operation**: String - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: dynamic - constant value to compare to

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Examples
```dart
var schema =  Schema()
    .withRule( ValueComparisonRule('EQ', 1));

schema.validate(1);          // Result: no errors
schema.validate(2);          // Result: 2 is not equal to 1
```

### See also
- #### [IValidationRule](../ivalidation_rule)
