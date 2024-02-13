---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Validation rule used to negate another rule.

---

### Description

The NotRule class allows you to negate a rule. Thus, when the embedded rule returns errors, then the negated rule returns no errors and vice versa.

### Constructors

#### NewNotRule
Creates a new validation rule and sets its values

> NewNotRule(rule [IValidationRule](../ivalidation_rule)) [*NotRule]()

- **rule**: [IValidationRule](../ivalidation_rule) - rule to be negated.


### Methods

#### Validate
Validates a given value against this rule.

> (c [*NotRule]()) Validate(path string, schema [ISchema](../ischema), value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.


### Examples
```go
var schema = NewSchema()
    .WithRule(NewNotRule(
        NewValueComparisonRule("EQ", 1)
    ))
 
schema.Validate(1);          // Result: error
schema.Validate(5);          // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)

