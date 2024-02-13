---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Validation rule used to check that a list contains only specified values.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> `public` IncludedRule(Object... values)

- **values**: Object... - list of constants that value must be included to.

### Instance methods


#### validate
Validates a given value against this rule.

> `public` void validate(String path, [Schema](../schema) schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples
```java
{@code
  Schema schema = new Schema()
       .withRule(new IncludedRule(1, 2, 3));
  
  schema.validate(2);      // Result: no errors
  schema.validate(10);     // Result: 10 must be one of 1, 2, 3
  }
```

### See also
- #### [IValidationRule](../ivalidation_rule)
