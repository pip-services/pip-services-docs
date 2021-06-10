---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule used to negate another rule.

---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The NotRule class allows you to negate a rule. Thus, when the embedded rule returns errors, then the negated rule returns no errors and vice versa.

### Constructors
Creates a new validation rule and sets its values

> `public` NotRule([IValidationRule](../ivalidation_rule) rule)

- **rule**: [IValidationRule](../ivalidation_rule) - a rule to be negated.


### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: object - a value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - a list with validation results to add new results.


### Examples
```cs
var schema = new Schema().WithRule(
new NotRule(new ValueComparisonRule("EQ", 1)));

schema.Validate(1);          // Result: error
schema.Validate(5);          // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)
