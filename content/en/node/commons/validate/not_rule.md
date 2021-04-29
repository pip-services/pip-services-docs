---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule negate another rule.
    When embedded rule returns no errors, than this rule return an error.
    When embedded rule return errors, than the rule returns no errors.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**
```typescript
let schema = new Schema()
    .withRule(new NotRule(
        new ValueComparisonRule("EQ", 1)
    ));
    
schema.validate(1);          // Result: error
schema.validate(5);          // Result: no error

```

### Constructors
Creates a new validation rule and sets its values

> `public` constructor(rule: [IValidationRule](../ivalidation_rule)): [NotRule]()

- **rule**: [IValidationRule](../ivalidation_rule) - a rule to be negated.



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