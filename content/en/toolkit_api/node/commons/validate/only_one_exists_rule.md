---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors
Creates a new validation rule and sets its values. 

> `public` constructor(...properties: string[])

- **properties**: string[] - list of property names where only one property must exist

### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


### Examples

```typescript
let schema = new Schema()
    .withRule(new OnlyOneExistsRule("field1", "field2"));
     
schema.validate({ field1: 1, field2: "A" });     // Result: only one of properties field1, field2 must exist
schema.validate({ field1: 1 });                  // Result: no errors
schema.validate({ });                            // Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
