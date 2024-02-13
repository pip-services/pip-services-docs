---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Validation rule to check that one or more values are excluded from the list of constants.
---


### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors

#### NewExcludedRule
Creates a new validation rule and sets its values

> NewExcludedRule(values ...any) [*ExcludedRule]()

- **values**: ...any - list of values that must be excluded from a list of constants

### Methods

#### Validate
Validates the given value. None of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

> (c [*ExcludedRule]()) Validate(path string, schema [ISchema](../ischema), value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value that is to be validated.
- **schema**: [ISchema](../ischema) - (not used in this implementation).
- **value**: any - value that is to be validated.
- **results**: [][*ValidationResult](../validation_result) - results of the validation.

### Examples

```go
schema := NewSchema()
	.WithRule(NewExcludedRule(1, 2, 3));
    
schema.Validate(2);      // Result: 2 must not be one of 1, 2, 3
schema.Validate(10);     // Result: no errors 

```

### See also
- #### [IValidationRule](../ivalidation_rule)

