---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule used to check that one or more values are excluded from the list of constants.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors
Creates a new validation rule and sets its values

> `public` constructor(...values: any[])

- **values**: any[] - list of constants that value must be excluded from

### Instance methods

#### validate
Validates the given value. none of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void 

- **path**: string - dot notation path to the value that is to be validated.
- **schema**: [Schema](../schema) - (not used in this implementation).
- **value**: any - value that is to be validated.
- **results**: [ValidationResult](../validation_result)[] - results of the validation.

### Examples

```typescript
let schema = new Schema()
    .withRule(new ExcludedRule(1, 2, 3));
 
schema.validate(2);      // Result: 2 must not be one of 1, 2, 3
schema.validate(10);     // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
