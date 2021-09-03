---
type: docs
title: "OrRule"
linkTitle: "OrRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Validation rule that allows you to check combinations of rules created with OR logical operations.
    
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OrRule class allows you to validate combinations of rules created with OR logical operations.

**Important points**

- When one of the combined rules returns no errors, then this rule also returns no errors.
- When all combined rules return errors, then this rule returns all the errors.

### Constructors
Creates a new validation rule and sets its values.

> OrRule(List<[IValidationRule](../ivalidation_rule)> rules)

- **rules**: List<[IValidationRule](../ivalidation_rule)> - list of rules to join with an OR operator.     

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void performValidation(String path, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples

```dart
var schema =  Schema()
    .withRule(OrRule(
         ValueComparisonRule('LT', 1),
         ValueComparisonRule('GT', 10)
    ));

schema.validate(0);          // Result: no error
schema.validate(5);          // Result: 5 must be less than 1 or 5 must be more than 10
schema.validate(20);         // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)
