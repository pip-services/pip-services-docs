---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When none of the combined rules returns errors, then this rule also returns no errors.

### Constructors
Creates a new validation rule and sets its values.

> AndRule(List<[IValidationRule](../ivalidation_rule)> rules)

- **rules**: List<[IValidationRule](../ivalidation_rule)> - list of rules to join with the AND operator.

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void validate(String path, [Schema](../schema) schema, dynamic value, List<[ValidationRule](../validation_result)> results)

- **path**: sString - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationRule](../validation_result)> - list with validation results to add new results.

### Example
```dart
var schema =  Schema()
    .withRule( AndRule(
         ValueComparisonRule('GTE', 1),
         ValueComparisonRule('LTE', 10)
    ));

schema.validate(0);          // Result: 0 must be greater or equal to 1
schema.validate(5);          // Result: no error
schema.validate(20);         // Result: 20 must be letter or equal 10

```

### See also
- #### [IValidationRule](../ivalidation_rule)
