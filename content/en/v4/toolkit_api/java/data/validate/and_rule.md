---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When none of the combined rules returns errors, then this rule also returns no errors.

### Constructors
Creates a new validation rule and sets its values.

> `public` AndRule([IValidationRule](../ivalidation_rule)... rules)

- **rules**: [IValidationRule](../ivalidation_rule) - list of rules to join with the AND operator.

### Instance methods

#### validate
Validates a given value against this rule.

> `public` void validate(String path, [Schema](../schema) schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Example
```java
{@code
  Schema schema = new Schema()
       .withRule(new AndRule(
           new ValueComparisonRule("GTE", 1),
           new ValueComparisonRule("LTE", 10)
       ));
  
  schema.validate(0);          // Result: 0 must be greater or equal to 1
  schema.validate(5);          // Result: no error
  schema.validate(20);         // Result: 20 must be letter or equal 10
  }

```

### See also
- #### [IValidationRule](../ivalidation_rule)
