---
type: docs
title: "OrRule"
linkTitle: "OrRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Validation rule that allows you to check combinations of rules created with the OR logical operations.
    
---

### Description

The OrRule class allows you to validate combinations of rules created with the OR logical operations.

Important points

- When one of the combined rules returns no errors, then this rule also returns no errors.
- When all combined rules return errors, then this rule returns all the errors.

### Constructors


#### NewOrRule
Creates a new validation rule and sets its values.

> NewOrRule(rules ...[IValidationRule](../ivalidation_rule)) [*OrRule]()

- **rules**: ...[IValidationRule](../ivalidation_rule) - list of rules to join with OR operator     

### Methods

#### validate
Validates a given value against this rule.

> (c [*OrRule]()) Validate(path string, schema [ISchema](../ischema), value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: interface{} - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.


### Examples

```go
var schema = NewSchema()
	.WithRule(NewOrRule(
		NewValueComparisonRule("LT", 1),
		NewValueComparisonRule("GT", 10),
	))
schema.Validate()   // Result: no error
schema.Validate(5)  // Result: 5 must be less than 1 or 5 must be more than 10
schema.Validate(20) // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)

