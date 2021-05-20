---
type: docs
title: "OrRule"
linkTitle: "OrRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule that allows you to check combinations of rules created with OR logical operations.
    
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OrRule class allows you to validate combinations of rules created with OR logical operations.

Important points

- When one of the combined rules returns no errors, then this rule also returns no errors.
- When all combined rules return errors, then this rule returns all the errors.

### Constructors
Creates a new validation rule and sets its values.

> `public` OrRule(params [IValidationRule](../ivalidation_rule)[] rules)

- **rules**: [IValidationRule](../ivalidation_rule)[] - a list of rules to join with OR operator     

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
var schema = new Schema().WithRule(new OrRule(new ValueComparisonRule("LT", 1), 
                                              new ValueComparisonRule("GT", 10)));

schema.Validate(0);          // Result: no error
schema.Validate(5);          // Result: 5 must be less than 1 or 5 must be more than 10
schema.Validate(20);         // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)
