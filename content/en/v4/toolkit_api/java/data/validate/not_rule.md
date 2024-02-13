---
type: docs
title: "NotRule"
linkTitle: "NotRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Validation rule used to negate another rule.

---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The NotRule class allows you to negate a rule. Thus, when the embedded rule returns errors, then the negated rule returns no errors and vice versa.

### Constructors
Creates a new validation rule and sets its values

> `public` NotRule([IValidationRule](../ivalidation_rule) rule)

- **rule**: [IValidationRule](../ivalidation_rule) - rule to be negated.


### Instance methods

#### validate
Validates a given value against this rule.

> `public` void validate([Schema](../schema) path, Schema schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.


### Examples
```java
{@code
  Schema schema = new Schema()
       .withRule(new NotRule(
           new ValueComparisonRule("EQ", 1)
       ));
 
  schema.validate(1);          // Result: error
  schema.validate(5);          // Result: no error
  }

```

### See also
- #### [IValidationRule](../ivalidation_rule)
