---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule that check that at least one of the object properties is not null.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:** 
```typescript
let schema = new Schema()
    .withRule(new AtLeastOneExistsRule("field1", "field2"));
  
schema.validate({ field1: 1, field2: "A" });     // Result: no errors
schema.validate({ field1: 1 });                  // Result: no errors
schema.validate({ });                            // Result: at least one of properties field1, field2 must exist

```

### Constructors
Creates a new validation rule and sets its values

> `public` constructor(...properties: string[]): [AtLeastOneExistsRule]()

- **properties**: string[] - a list of property names where at least one property must exist

### Methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void 

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.



### See also
- #### [IValidationRule](../ivalidation_rule)
