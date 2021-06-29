---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
   Validation rule that compares a value to a constant.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors
Creates a new validation rule and sets its values.

> `public` ValueComparisonRule(string operation, object value)

- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: object - constant value to compare to

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
var schema = new Schema().WithRule(new ValueComparisonRule("EQ", 1));

schema.Validate(1);          // Result: no errors
schema.Validate(2);          // Result: 2 is not equal to 1
```

### See also
- #### [IValidationRule](../ivalidation_rule)
