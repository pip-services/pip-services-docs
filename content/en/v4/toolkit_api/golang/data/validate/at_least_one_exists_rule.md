---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Validation rule that checks that at least one of the object properties exists.
---


### Description

The AtLeastOneExistsRule class allows you to check that given a set of properties, at least one of them exists. 

### Constructors

#### NewAtLeastOneExistsRule
Creates a new validation rule and sets its values

> NewAtLeastOneExistsRule(properties ...string) [*AtLeastOneExistsRule]()

- **properties**: ...string - list of property names where at least one property must exist

### Methods

#### Validate
Validates a given value against this rule.

> (c [*AtLeastOneExistsRule]()) Validate(path string, schema [ISchema](../ischema), value any) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [][*ValidationResult](../validation_result) - list with validation results to add new results.

### Examples
```go
schema := NewSchema()
	.WithRule(NewAtLeastOneExistsRule("field1", "field2"))

schema.Validate(struct {
		field1 int
		field2 string
	}{field1: 1, field2: "A"})     // Result: no errors
schema.Validate(struct {
		field1 int
		field2 string
	}{field1: 1})                  // Result: no errors
schema.Validate(struct {}{})       // Result: at least one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)

