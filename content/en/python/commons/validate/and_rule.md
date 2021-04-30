---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule to combine rules with AND logical operation.
    When all rules returns no errors, than this rule also returns no errors.
    When one of the rules return errors, than the rules returns all errors.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:** 
```typescript
let schema = new Schema()
    .withRule(new AndRule(
        new ValueComparisonRule("GTE", 1),
        new ValueComparisonRule("LTE", 10)
    ));
    
schema.validate(0);          // Result: 0 must be greater or equal to 1
schema.validate(5);          // Result: no error
schema.validate(20);         // Result: 20 must be letter or equal 10

```

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...rules: [IValidationRule](../ivalidation_rule)[]): [AndRule]()

- **rules**: [IValidationRule](../ivalidation_rule)[] - a list of rules to join with AND operator

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
