---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors

#### NewOnlyOneExistsRule
Creates a new validation rule and sets its values

> NewOnlyOneExistsRule(properties ...string) [*OnlyOneExistsRule]()

- **properties**: ...string - list of property names where only one property must exist

### Methods

#### Validate
Validates a given value against this rule.

> (c *OnlyOneExistsRule) Validate(path string, schema [ISchema](../ischema), value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - dot notation path to the value.
- **schema**: [ISchema](../ischema) - schema this rule is called from
- **value**: interface{} - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results to add new results.


### Examples

```go
var schema = NewSchema().WithRule(NewOnlyOneExistsRule("field1", "field2"));
 
schema.Validate({ field1: 1, field2: "A" });     // Result: only one of properties field1, field2 must exist
schema.Validate({ field1: 1 });                  // Result: no errors
schema.Validate({ });                            // Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
