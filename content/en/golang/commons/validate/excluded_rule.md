---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation rule to check that one or more values are excluded from the list of constants.
---


### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors
Creates a new validation rule and sets its values

> NewExcludedRule(values ...interface{}) [*ExcludedRule]()

- **values**: ...interface{} - a list of constants that value must be excluded from

### Methods

#### Validate
Validates the given value. nil of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

> (c [*ExcludedRule]()) Validate(path string, schema [ISchema](../ischema), value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - the dot notation path to the value that is to be validated.
- **schema**: [ISchema](../ischema) - (not used in this implementation).
- **value**: interface{} - the value that is to be validated.
- **results**: [][*ValidationResult](../validation_result) - the results of the validation.

### Examples

```go
schema := NewSchema()
    .WithRule(NewExcludedRule(1, 2, 3));
 
schema.Validate(2);      // Result: 2 must not be one of 1, 2, 3
schema.Validate(10);     // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
