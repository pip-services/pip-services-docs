---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When no combined rule returns errors, then this rule also returns no errors.

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...rules: [IValidationRule](../ivalidation_rule)[]): [AndRule]()

- **rules**: [IValidationRule](../ivalidation_rule)[] - a list of rules to join with AND operator

### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.



### See also
- #### [IValidationRule](../ivalidation_rule)
