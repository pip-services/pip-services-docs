---
type: docs
title: "PropertiesComparisonRule"
linkTitle: "PropertiesComparisonRule"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-data-dart"
description: >
    Validation rule that compares two object properties.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The PropertiesComparisonRule class allows you to create a validation rule used to compare two object's properties.

### Constructors
Creates a new validation rule and sets its arguments.

See [ObjectComparator.compare](../object_comparator/#compare)

> PropertiesComparisonRule(String property1, String operation, String property2)

- **property1**: String - name of the first property to compare.
- **operation**: String - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **property2**: String - name of the second property to compare.

### Instance methods

#### validate
Validates a given value against this rule.

`@override`
> void validate(String? path, [Schema](../schema) schema, dynamic value, List<[ValidationResult](../validation_result)> results)

- **path**: String? - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: dynamic - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Examples

```dart
var schema =  ObjectSchema()
    .withRule(PropertyComparisonRule('field1', 'NE', 'field2'));

schema.validate({ field1: 1, field2: 2 });       // Result: no errors
schema.validate({ field1: 1, field2: 1 });       // Result: field1 shall not be equal to field2
schema.validate({});                             // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
