---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule used to check that a list contains only specified values.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> `public` IncludedRule(params object[] values)

- **values**: object[] - list of constants that value must be included to

### Instance methods


#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - path to the value in dot notation.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples

```cs
var schema = new Schema().WithRule(new IncludedRule(1, 2, 3));

schema.Validate(2);      // Result: no errors
schema.Validate(10);     // Result: 10 must be one of 1, 2, 3
```

### See also
- #### [IValidationRule](../ivalidation_rule)
