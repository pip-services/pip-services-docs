---
type: docs
title: "OrRule"
linkTitle: "OrRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule to combine rules with OR logical operation.
    When one of rules returns no errors, than this rule also returns no errors.
    When all rules return errors, than the rule returns all errors.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**

```typescript
let schema = new Schema()
    .withRule(new OrRule(
        new ValueComparisonRule("LT", 1),
        new ValueComparisonRule("GT", 10)
    ));
    
schema.validate(0);          // Result: no error
schema.validate(5);          // Result: 5 must be less than 1 or 5 must be more than 10
schema.validate(20);         // Result: no error

```

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...rules: [IValidationRule](../ivalidation_rule)[]): [OrRule]()

- **rules**: string[] - a list of rules to join with OR operator    

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