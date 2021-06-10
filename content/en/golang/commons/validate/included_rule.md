---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation rule to check that a list contains only specified values.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> NewIncludedRule(values ...interface{}) [*IncludedRule]()

- **values**: ...interface{} - a list of constants that value must be included to

### Methods


#### validate
Validates a given value against this rule.

> (c [*IncludedRule]()) Validate(path string, schema [ISchema](../ischema), value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - a dot notation path to the value.
- **schema**: [ISchema](../ischema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [][*ValidationResult](../validation_result) - a list with validation results to add new results.


### Examples
```go
var schema = NewSchema()
    .WithRule(NewIncludedRule(1, 2, 3));
 
schema.Validate(2);      // Result: no errors
schema.Validate(10);     // Result: 10 must be one of 1, 2, 3
```

### See also
- #### [IValidationRule](../ivalidation_rule)
