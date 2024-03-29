---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-data-dart"
description: >
    Validation rule used to check that one or more values are excluded from the list of constants.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors
Creates a new validation rule and sets its values

> ExcludedRule(List\<dynamic\>? values)

- **values**: List\<dynamic\>? - list of constants with value must be excluded from

### Instance methods

#### validate
Validates the given value. none of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

`@override`
> void validate(String? path, [Schema](../schema) schema, dynamic value, List<[ValidationRule](../validation_result)> results)


- **path**: String? - dot notation path to the value that is to be validated.
- **schema**: [Schema](../schema) - (not used in this implementation).
- **value**: dynamic - value that is to be validated.
- **results**: List<[ValidationRule](../validation_result)> - results of the validation.

### Examples

```dart
var schema =  Schema()
    .withRule( ExcludedRule(1, 2, 3));

schema.validate(2);      // Result: 2 must not be one of 1, 2, 3
schema.validate(10);     // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
