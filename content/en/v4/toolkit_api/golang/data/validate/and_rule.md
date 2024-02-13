---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When none of the combined rules returns errors, then this rule also returns no errors.

### Constructors

#### NewAndRule
Creates a new validation rule and sets its values.

> NewAndRule(rules ...[IValidationRule](../ivalidation_rule)) [*AndRule]()

- **rules**: ...[IValidationRule](../ivalidation_rule) - list of rules to join with AND operator

### Methods

#### Validate
Validates a given value against this rule.

> (c [*AndRule]()) Validate(path string, schema [ISchema](../ischema), value any) [][*ValidationResult](../ivalidation_rule)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../ivalidation_rule) - list with validation results to add new results.

### Example
```go
schema = NewSchema()
	.WithRule(NewAndRule(
		NewValueComparisonRule("GTE", 1),
		NewValueComparisonRule("LTE", 10),
	))

schema.Validate(0)  // Result: 0 must be greater or equal to 1
schema.Validate(5)  // Result: no error
schema.Validate(20) // Result: 20 must be letter or equal 10

```

### See also
- #### [IValidationRule](../ivalidation_rule)

