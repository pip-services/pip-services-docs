---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When none of the combined rules returns errors, then this rule also returns no errors.

### Constructors
Creates a new validation rule and sets its values.

> `public` AndRule(params [IValidationRule](../ivalidation_rule)[] rules)

- **rules**: [IValidationRule](../ivalidation_rule)[] - list of rules to join with AND operator

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Example
```cs
var schema = new Schema().WithRule(new AndRule(
    new ValueComparisonRule("GTE", 1),
    new ValueComparisonRule("LTE", 10)
));

schema.Validate(0);          // Result: 0 must be greater or equal to 1
schema.Validate(5);          // Result: no error
schema.Validate(20);         // Result: 20 must be letter or equal 10

```

### See also
- #### [IValidationRule](../ivalidation_rule)
