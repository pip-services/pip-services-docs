---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule used to negate another rule.

---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The NotRule class allows you to negate a rule. Thus, when the embedded rule returns errors, then the negated rule returns no errors and vice versa.

### Constructors
Creates a new validation rule and sets its values

> `public` constructor(rule: [IValidationRule](../ivalidation_rule))

- **rule**: [IValidationRule](../ivalidation_rule) - rule to be negated.


### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results to add new results.


### Examples
```typescript
let schema = new Schema()
    .withRule(new NotRule(
        new ValueComparisonRule("EQ", 1)
    ));
    
schema.validate(1);          // Result: error
schema.validate(5);          // Result: no error

```

### See also
- #### [IValidationRule](../ivalidation_rule)
