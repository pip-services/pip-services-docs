---
type: docs
title: "PropertiesComparisonRule"
linkTitle: "PropertiesComparisonRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule that compares two object properties.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The PropertiesComparisonRule class allows you to create a validation rule to compare two object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [ObjectComparator.compare](../object_comparator/#compare)

> `public` PropertiesComparisonRule(string property1, string operation, string property2)

- **property1**: string - name of the first property to compare.
- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **property2**: string - name of the second property to compare.

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Examples

```cs
var schema = new ObjectSchema().WithRule(new PropertyComparisonRule("field1", "NE", "field2"));

schema.Validate({ field1: 1, field2: 2 });       // Result: no errors
schema.Validate({ field1: 1, field2: 1 });       // Result: field1 shall not be equal to field2
schema.Validate({ });                             // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
