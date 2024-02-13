---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
   Validation rule that compares a value to a constant.
---

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors

#### NewValueComparisonRule
Creates a new validation rule and sets its values.

> NewValueComparisonRule(operation string, value any) [*ValueComparisonRule]()

- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: any - constant value to compare to

### Methods

#### Validate
Validates a given value against this rule.

> (c [*ValueComparisonRule]()) Validate(path string, schema ISchema, value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.

### Examples
```go
var schema = NewSchema()
    .WithRule(NewValueComparisonRule("EQ", 1));
  
schema.Validate(1);          // Result: no errors
schema.Validate(2);          // Result: 2 is not equal to 1
```

### See also
- #### [IValidationRule](../ivalidation_rule)

