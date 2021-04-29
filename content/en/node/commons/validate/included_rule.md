---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule to check that value is included into the list of constants.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**
```typescript
let schema = new Schema()
    .withRule(new IncludedRule(1, 2, 3));
    
schema.validate(2);      // Result: no errors
schema.validate(10);     // Result: 10 must be one of 1, 2, 3
```

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...values: any[]): [IncludedRule]()

- **values**: any[] - a list of constants that value must be included to

### Methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result - a list with validation results to add new results.


### See also
- #### [IValidationRule](../ivalidation_rule)
